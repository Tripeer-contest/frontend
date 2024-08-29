import styles from '../modules/homePlaceBanner.module.css';
import { PlaceType } from '../../../types/PlaceType.ts';
import HomeLoading from './HomeLoading.tsx';
import ToTop from './ToTop.tsx';
import useHomePlaceBanner from '../hooks/useHomePlaceBanner.tsx';
import PlaceBox from './PlaceBox.tsx';

const HomePlaceBanner = () => {
  const {
    data,
    isLoading,
    hasNextPage,
    loadingRef,
    scrollHandler,
    getCityTownName,
  } = useHomePlaceBanner();

  const cityTownName = getCityTownName();

  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <p
          className={styles.title}
        >{`${cityTownName[0]} ${cityTownName[1]} ${cityTownName[2]}`}</p>
      </div>
      {data?.pages.map((page, idx) => (
        <div key={idx} className={styles.gridBox}>
          {page.spotInfoDtos.map((place: PlaceType) => (
            <PlaceBox
              key={place.spotId}
              name={place.spotName}
              address={place.address}
              img={place.spotImg}
            />
          ))}
        </div>
      ))}
      {!isLoading && hasNextPage && <HomeLoading ref={loadingRef} />}
      <ToTop scrollHandler={scrollHandler} />
    </div>
  );
};

export default HomePlaceBanner;
