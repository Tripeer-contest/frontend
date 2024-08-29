import styles from '../modules/homePlaceBanner.module.css';
import { useGetPlaceList } from '../hooks/useGetPlaceList.tsx';
import { PlaceType } from '../../../types/PlaceType.ts';
import HomeLoading from './HomeLoading.tsx';
import { useEffect, useRef } from 'react';
import zustandStore from '../../../store/store.tsx';
import ToTop from './ToTop.tsx';

const HomePlaceBanner = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetPlaceList();
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const ioRef = useRef<IntersectionObserver | null>();

  const scrollTo = zustandStore((state) => state.scrollTo);

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

  return (
    <div className={styles.container}>
      {data?.pages.map((page, idx) => (
        <div key={idx}>
          {page.spotInfoDtos.map((place: PlaceType) => (
            <div key={place.spotId}>{place.spotName}</div>
          ))}
        </div>
      ))}
      {!isLoading && hasNextPage && <HomeLoading ref={loadingRef} />}
      <ToTop scrollHandler={scrollHandler} />
    </div>
  );
};

export default HomePlaceBanner;
