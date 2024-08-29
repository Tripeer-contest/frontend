import { useGetPlaceList } from './useGetPlaceList.tsx';
import { useEffect, useRef } from 'react';
import { Region } from '../../../data/RegionCategory.ts';
import zustandStore from '../../../store/store.tsx';

const useHomePlaceBanner = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, refetch } =
    useGetPlaceList();
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const ioRef = useRef<IntersectionObserver | null>();

  const [scrollTo, h_nowCityId, h_nowTownId, h_nowPlaceId, h_townList] =
    zustandStore((state) => [
      state.scrollTo,
      state.h_nowCityId,
      state.h_nowTownId,
      state.h_nowPlaceId,
      state.h_townList,
    ]);

  const getCityTownName = () => {
    let townId = h_nowTownId;
    let townName;
    let cityName = '';
    let categoryName;

    h_nowPlaceId === -1
      ? (categoryName = '모든 카테고리')
      : h_nowPlaceId === 1
        ? (categoryName = '맛집')
        : h_nowPlaceId === 2
          ? (categoryName = '숙박')
          : (categoryName = '명소');

    if (h_nowCityId !== -1) {
      cityName = Region[h_nowCityId].name;
    }

    if (h_nowTownId === -1) {
      townId = 0;
    }

    if (h_nowCityId === 33 && townId >= 10) {
      townId -= 1;
    }

    if (h_nowCityId === 34 && townId >= 10) {
      townId -= 1;
    }

    if (h_nowCityId === 36 && townId >= 6) {
      townId -= 1;
    }

    if (h_nowCityId === 36 && townId >= 11) {
      townId -= 1;
    }

    if (h_nowCityId === 36 && townId >= 13) {
      townId -= 1;
    }

    if (h_nowCityId === 38 && townId >= 16) {
      townId -= 2;
    }

    if (h_nowCityId === 39 && townId !== 0) {
      townId -= 2;
    }

    townName = h_townList[townId].townName;
    if (townName === '전체') townName = '';

    return [cityName, townName, categoryName];
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
            entry.isIntersecting &&
              fetchNextPage().then(() => console.log('ok'));
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
    hasNextPage,
    loadingRef,
    scrollHandler,
    getCityTownName,
  };
};

export default useHomePlaceBanner;
