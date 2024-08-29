import styles from '../modules/homePlaceBanner.module.css';
import { useGetPlaceList } from '../hooks/useGetPlaceList.tsx';
import { PlaceType } from '../../../types/PlaceType.ts';
import HomeLoading from './HomeLoading.tsx';
import { useEffect, useRef } from 'react';

const HomePlaceBanner = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useGetPlaceList();
  const loadingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {}, []);

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
    </div>
  );
};

export default HomePlaceBanner;
