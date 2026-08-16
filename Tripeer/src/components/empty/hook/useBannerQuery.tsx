import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import getRecommendKeywords from '../api/getRecommendKeyword';
import { postWish } from '../../../features/home/api/postWish';
import { RecommendType } from '../../../types/PlaceType';

export default function useGetBannerQuery(
  cityId: number,
  townId: number,
  keyword: string,
) {
  const { data } = useSuspenseQuery({
    queryKey: ['banner', cityId, townId, keyword],
    queryFn: () => getRecommendKeywords(keyword, cityId, townId),
  });

  return { data };
}

const useBannerMutation = (cityId: number, townId: number, keyword: string) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ({ spotId, like }: { spotId: number; like: boolean }) =>
      postWish({ spotId: spotId, like: like }),
    onMutate: async ({ like, spotId }) => {
      await queryClient.cancelQueries({
        queryKey: ['banner', cityId, townId, keyword],
      });
      const prev = queryClient.getQueryData([
        'banner',
        cityId,
        townId,
        keyword,
      ]);
      queryClient.setQueryData(
        ['banner', cityId, townId, keyword],
        (old: RecommendType) => {
          const newSpotDto = old.spotInfoDtos.map((spot) => {
            return spot.spotId === spotId ? { ...spot, wishlist: !like } : spot;
          });
          return { ...old, spotInfoDtos: newSpotDto };
        },
      );

      return { prev };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(
        ['banner', cityId, townId, keyword],
        context?.prev,
      );
    },
  });
  return { mutate };
};

export { useBannerMutation };
