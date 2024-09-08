import zustandStore from '../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { getPlace } from '../api/getPlace.tsx';

export const useGetPlaceList = () => {
  const [h_nowCityId, h_nowTownId, h_nowPlaceId] = zustandStore(
    useShallow((state) => [
      state.h_nowCityId,
      state.h_nowTownId,
      state.h_nowPlaceId,
    ]),
  );

  const cityId = h_nowCityId || -1;
  const townId = h_nowTownId || -1;
  const placeId = h_nowPlaceId || -1;

  const client = useQueryClient();
  const isCashed = client.getQueryData([
    'getPlaceList',
    cityId,
    townId,
    placeId,
  ]);

  const { data, isLoading, ...rest } = useInfiniteQuery({
    queryKey: ['getPlaceList', cityId, townId, placeId],
    queryFn: ({ pageParam = 0 }) =>
      getPlace(cityId, townId, placeId, pageParam),
    getNextPageParam: (lastPage, page) => {
      return lastPage.last === false ? page.length : undefined;
    },
    staleTime: 5 * 60 * 1000,
    initialPageParam: 0,
    enabled: !isCashed,
  });

  return { data, isLoading, ...rest };
};
