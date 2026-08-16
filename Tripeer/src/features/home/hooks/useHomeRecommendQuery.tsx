import { useMutation, useQueryClient } from '@tanstack/react-query';
import zustandStore from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';
import { postWish } from '../api/postWish';
import { RecommendType } from '../../../types/PlaceType';

export default function useHomeRecommendQuery() {
  const [cityId, townId, contentTypeId] = zustandStore(
    useShallow((state) => [
      state.h_nowCityId,
      state.h_nowTownId,
      state.h_nowPlaceId,
    ]),
  );
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async ({ spotId, like }: { spotId: number; like: boolean }) =>
      postWish({ spotId, like }),
    onMutate: async ({ spotId, like }) => {
      await queryClient.cancelQueries({
        queryKey: [`homeRecommend_${cityId}_${townId}_${contentTypeId}`],
      });
      const prev = queryClient.getQueryData([
        `homeRecommend_${cityId}_${townId}_${contentTypeId}`,
      ]);
      queryClient.setQueryData(
        [`homeRecommend_${cityId}_${townId}_${contentTypeId}`],
        (old: RecommendType[]) => {
          console.log(old);
          const newOne = old.map((item) => {
            const newDto = item.spotInfoDtos.map((spot) => {
              return spot.spotId === spotId
                ? { ...spot, wishlist: !like }
                : spot;
            });
            return { ...item, spotInfoDtos: newDto };
          });
          return newOne;
        },
      );
      return { prev };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(
        [`homeRecommend_${cityId}_${townId}_${contentTypeId}`],
        context?.prev,
      );
    },
  });
  return { mutate };
}
