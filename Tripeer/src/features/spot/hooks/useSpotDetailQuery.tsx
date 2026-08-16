import {
  useMutation,
  useQuery,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { getReviewPerPage, getSpotDetail } from '../api/getSpotDetail';
import {
  ReviewListInterface,
  SpotDetailInterface,
} from '../../../types/PlaceType';
import likeSpot from '../api/likeSpot';
import { postWish } from '../../home/api/postWish';

export default function useSpotDetailQuery<T>(
  spotId: number,
  selectFn: (data: SpotDetailInterface) => T,
) {
  return useSuspenseQuery<SpotDetailInterface, Error, T>({
    queryKey: ['spot', 'detail', spotId],
    queryFn: () => getSpotDetail(spotId),
    select: selectFn,
  });
}

export function useReviewDetailQuery(spotId: number, page: number) {
  const { data, isError, isLoading } = useQuery<ReviewListInterface>({
    queryKey: ['spot', 'review', spotId, page],
    queryFn: () => getReviewPerPage(spotId, page),
    enabled: !!page,
  });
  return { data, isError, isLoading };
}

export function useHeartDetailMutation() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ spotId, isLike }: { spotId: number; isLike: boolean }) =>
      likeSpot(spotId, isLike),
    onMutate: async (param) => {
      const key = ['spot', 'detail', param.spotId];
      await queryClient.cancelQueries({
        queryKey: key,
      });
      const prev = queryClient.getQueryData(key);
      queryClient.setQueryData(key, (old: SpotDetailInterface) => ({
        data: { ...old.data, like: !param.isLike },
      }));
      return { prev };
    },
    onError: (_, param, context) => {
      queryClient.setQueryData(['spot', 'detail', param.spotId], context?.prev);
    },
  });
  return mutation;
}

export function useSimilarMutate(detailId: number) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ({ like, spotId }: { spotId: number; like: boolean }) =>
      postWish({ like, spotId }),
    onMutate: async ({ like, spotId }) => {
      await queryClient.cancelQueries({
        queryKey: ['spot', 'detail', detailId],
      });
      const prev = queryClient.getQueryData(['spot', 'detail', detailId]);
      queryClient.setQueryData(
        ['spot', 'detail', detailId],
        (old: SpotDetailInterface) => {
          const newNear = old.data.nearSpotList.map((item) => {
            return item.spotId === spotId ? { ...item, wishlist: !like } : item;
          });
          const newSimilar = old.data.similarSpotList.map((item) => {
            return item.spotId === spotId ? { ...item, wishlist: !like } : item;
          });
          return {
            data: {
              ...old.data,
              similarSpotList: newSimilar,
              nearSpotList: newNear,
            },
          };
        },
      );
      return { prev };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(['spot', 'detail', detailId], context?.prev);
    },
  });
  return { mutate };
}
