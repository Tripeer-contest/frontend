import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import getPlanWish from '../api/getPlanWishList';
import postWishItem from '../../cart/api/postWishItem';
import { PlanSearchSpotInterface } from '../../../types/PlaceType';

export function useGetPlanWishQuery(id: number) {
  const { data } = useSuspenseQuery({
    queryKey: ['plan', 'detail', id, 'wish'],
    queryFn: () => getPlanWish(id),
  });

  return { data };
}

export function usePostPlanWishQuery(planId: number) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: ({ id, like }: { id: number; like: boolean }) =>
      postWishItem(id, like),
    onMutate: async ({ id, like }) => {
      await queryClient.cancelQueries({
        queryKey: ['plan', 'detail', planId, 'wish'],
      });
      const previous = queryClient.getQueryData([
        'plan',
        'detail',
        planId,
        'wish',
      ]);
      queryClient.setQueryData(
        ['plan', 'detail', planId, 'wish'],
        (old: PlanSearchSpotInterface[]) => {
          const newPlanWish = old.map((item) =>
            item.spotInfoId === id ? { ...item, wishlist: !like } : item,
          );
          return newPlanWish;
        },
      );

      return { previous };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(['wishList'], context?.previous);
    },
  });

  return { mutate };
}
