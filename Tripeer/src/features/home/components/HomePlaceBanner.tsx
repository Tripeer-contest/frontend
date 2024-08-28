import styles from '../modules/homePlaceBanner.module.css';
import { useGetPlaceList } from '../hooks/useGetPlaceList.tsx';
import { PlaceType } from '../../../types/PlaceType.ts';

const HomePlaceBanner = () => {
  // 임시
  // const { data, isLoading, fetchNextPage, hasNextPage } = useGetPlaceList();
  const { data, isLoading, hasNextPage } = useGetPlaceList();

  return (
    <div className={styles.container}>
      {data?.pages.map((page, idx) => (
        <div key={idx}>
          {page.spotInfoDtos.map((place: PlaceType) => (
            <div key={place.spotId}>{place.spotName}</div>
          ))}
        </div>
      ))}
      {!isLoading && hasNextPage && <div>loading...</div>}
    </div>
  );
};

export default HomePlaceBanner;
