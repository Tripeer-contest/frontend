import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { RecommendInterfaceAPI } from '../../../types/PlanDetailTypes';
import getPlanRecommend from '../api/getPlanRecommend';
import postWishItem from '../../cart/api/postWishItem';

export default function useGetRecommendQuery(
  planId: number,
  cityId: number,
  townId: number,
) {
  const { data, isLoading, isError } = useQuery<RecommendInterfaceAPI>({
    queryKey: ['plan', 'recommend', planId, cityId, townId],
    queryFn: () => getPlanRecommend(planId, cityId, townId),
  });
  return { data, isLoading, isError };
}

export function useRecommendLikeQuery(
  planId: number,
  cityId: number,
  townId: number,
) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ id, like }: { id: number; like: boolean }) =>
      await postWishItem(id, like),
    onMutate: async ({ id, like }) => {
      await queryClient.cancelQueries({
        queryKey: ['plan', 'recommend', planId, cityId, townId],
      });
      const previous = queryClient.getQueryData([
        'plan',
        'recommend',
        planId,
        cityId,
        townId,
      ]);
      queryClient.setQueryData(
        ['plan', 'recommend', planId, cityId, townId],
        (old: RecommendInterfaceAPI) => {
          const newRecommend = old.map((item) => {
            const newSpotInfo = item.spotInfoDtos.map((spot) =>
              spot.spotInfoId === id ? { ...spot, wishlist: !like } : spot,
            );
            return {
              keyword: item.keyword,
              comment: item.comment,
              spotInfoDtos: newSpotInfo,
            };
          });
          return newRecommend;
        },
      );
      return { previous };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(
        ['plan', 'recommend', planId, cityId, townId],
        context?.previous,
      );
    },
  });
  return mutation;
}
