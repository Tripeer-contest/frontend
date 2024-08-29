import zustandStore from '../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPlace } from '../api/getPlace.tsx';

export const useGetPlaceList = () => {
  const [h_nowCityId, h_nowTownId, h_nowPlaceId] = zustandStore(
    useShallow((state) => [
      state.h_nowCityId,
      state.h_nowTownId,
      state.h_nowPlaceId,
    ]),
  );

  const { data, isLoading, ...rest } = useInfiniteQuery({
    queryKey: ['getPlaceList'],
    queryFn: ({ pageParam = 0 }) =>
      getPlace(h_nowCityId, h_nowTownId, h_nowPlaceId, pageParam),
    getNextPageParam: (lastPage) => {
      return lastPage.last === false ? lastPage.page + 1 : undefined;
    },
    initialPageParam: 0,
  });

  console.log(data);

  return { data, isLoading, ...rest };
};
