import styles from '../modules/homePlaceBanner.module.css';
import { PlaceType } from '../../../types/PlaceType.ts';
import HomeLoading from './HomeLoading.tsx';
import ToTop from './ToTop.tsx';
import useHomePlaceBanner from '../hooks/useHomePlaceBanner.tsx';
import SkeletonPlaceBox from './SkeletonPlaceBox.tsx';
import PlaceBox from './PlaceBox.tsx';
import usePlaceBox from '../hooks/usePlaceBox.tsx';

const HomePlaceBanner = () => {
  const { data, isLoading, hasNextPage, loadingRef, scrollHandler, titleName } =
    useHomePlaceBanner();
  const title = titleName();

  const { clickHandler, likeClickHandler, rating } = usePlaceBox();

  return (
    <div className={styles.container}>
      <div className={styles.titleBox}>
        <p className={styles.title}>{`${title}`}</p>
      </div>
      <div className={styles.gridBox}>
        {!isLoading && data
          ? data.pages.map((page) =>
              page.spotInfoDTOList.map((place: PlaceType) => (
                <PlaceBox
                  place={place}
                  key={place.spotId}
                  clickHandler={clickHandler}
                  likeClickHandler={likeClickHandler}
                  rating={rating}
                />
              )),
            )
          : Array.from({ length: 15 }).map((_, idx) => (
              <SkeletonPlaceBox key={idx} />
            ))}
      </div>
      {!isLoading && hasNextPage && <HomeLoading ref={loadingRef} />}
      <ToTop scrollHandler={scrollHandler} />
    </div>
  );
};

export default HomePlaceBanner;
