import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { postWish } from '../api/postWish';
import getReadMore from '../api/getReadMore';
import { RecommendType } from '../../../types/PlaceType';

const useRecommendPageQuery = (
  cityId: number,
  townId: number,
  keyword: string,
) => {
  const { data } = useSuspenseQuery<RecommendType>({
    queryKey: ['home', 'recommend', 'page', cityId, townId, keyword],
    queryFn: () => getReadMore(cityId, townId, keyword),
  });
  return { data };
};

const useRecommendMutation = (
  cityId: number,
  townId: number,
  keyword: string,
) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ({ spotId, like }: { spotId: number; like: boolean }) =>
      postWish({ spotId: spotId, like: like }),
    onMutate: async ({ like, spotId }) => {
      await queryClient.cancelQueries({
        queryKey: ['home', 'recommend', 'page', cityId, townId, keyword],
      });
      const prev = queryClient.getQueryData([
        'home',
        'recommend',
        'page',
        cityId,
        townId,
        keyword,
      ]);
      queryClient.setQueryData(
        ['home', 'recommend', 'page', cityId, townId, keyword],
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
        ['home', 'recommend', 'page', cityId, townId, keyword],
        context?.prev,
      );
    },
  });

  return { mutate };
};

export { useRecommendPageQuery, useRecommendMutation };
