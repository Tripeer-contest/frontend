import { useGetPlaceList } from './useGetPlaceList.tsx';
import { useEffect, useRef } from 'react';
import { TownList } from '../../../data/TownList.ts';
import { placeCategory } from '../../../data/placeCategory.ts';
import zustandStore from '../../../store/store.tsx';

const useHomePlaceBanner = () => {
  const {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    refetch,
    isFetched,
    isSuccess,
  } = useGetPlaceList();
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const ioRef = useRef<IntersectionObserver | null>();

  const [scrollTo, h_nowCityId, h_nowTownId, h_nowPlaceId] = zustandStore(
    (state) => [
      state.scrollTo,
      state.h_nowCityId,
      state.h_nowTownId,
      state.h_nowPlaceId,
    ],
  );

  const titleName = () => {
    const city = TownList.find((item) => item.id === h_nowCityId);
    const town = city?.town.find((item) => item.id === h_nowTownId);
    const category = placeCategory.find((item) => item.id === h_nowPlaceId);

    if (city && town && category) {
      const cityName = city.name;
      let townName = town.name;
      let categoryName = category.name;

      if (townName === '전체') townName = '';
      if (category.name === '전체') categoryName = '';

      return cityName + ' ' + townName + ' ' + categoryName;
    }
  };

  const scrollHandler = () => {
    scrollTo && scrollTo(0);
  };

  useEffect(() => {
    const current = loadingRef.current;

    if (current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            entry.isIntersecting && fetchNextPage().then();
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.5,
        },
      );
      ioRef.current = observer;
      observer.observe(current);
    }

    return () => {
      if (current && ioRef.current) ioRef.current.unobserve(current);
    };
  }, [fetchNextPage, hasNextPage]);

  useEffect(() => {
    refetch().then();
  }, [h_nowCityId, h_nowTownId, h_nowPlaceId, refetch]);

  return {
    data,
    isLoading,
    isFetched,
    isSuccess,
    hasNextPage,
    loadingRef,
    scrollHandler,
    titleName,
  };
};

export default useHomePlaceBanner;
