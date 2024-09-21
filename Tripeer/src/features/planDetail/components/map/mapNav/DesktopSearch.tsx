import styles from '../../../assets/map/mapNav/searchPlace.module.css';
import btnImg from '../../../assets/map/mapNav/assets/openListBtn.svg';
import SearchHeader from '../search/searchHeader';
import { Suspense, useState } from 'react';
import PlaceList from './PlaceList';
import SearchTopContent from '../search/SearchTopContent';
import RecommendContent from '../recommend/RecommendContent';
import SearchMainContent from '../search/SearchMainContent';
import zustandStore from '../../../../../store/store';
import ErrorBoundary from '../../../../../components/error/ErrorBoundary';
import SkeletonSearch from '../../../../../components/loading/SkeletonSearch';
import DesktopMapDetail from './DesktopMapDetail';
import PlanDetailWish from './PlanDetailWish';
import { useShallow } from 'zustand/react/shallow';
import SearchNowContent from './SearchNowContent';

export default function DesktopSearch() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRecommendSelected, setIsRecommendSelected] = useState(true);
  const [sortType, mode] = zustandStore(
    useShallow((state) => [state.room_sortType, state.room_modeBound]),
  );
  const sortNum: { [param: string]: number } = {
    전체: 1,
    명소: 2,
    숙박: 3,
    맛집: 4,
  };
  return (
    <>
      <div className={styles.container}>
        <SearchHeader />
        <img
          src={btnImg}
          className={isVisible ? styles.closeBtn : styles.openBtn}
          onClick={() => setIsVisible((prev) => !prev)}
        />
        <SearchTopContent setIsRecommendSelected={setIsRecommendSelected} />
        {isRecommendSelected ? (
          <RecommendContent />
        ) : (
          <>
            {sortNum[sortType] ? (
              <ErrorBoundary fallback={<div>에러</div>}>
                <Suspense fallback={<SkeletonSearch />}>
                  {mode ? (
                    <SearchNowContent sortNum={sortNum[sortType]} />
                  ) : (
                    <SearchMainContent sortNum={sortNum[sortType]} />
                  )}
                </Suspense>
              </ErrorBoundary>
            ) : (
              <ErrorBoundary fallback={<div>에러</div>}>
                <Suspense fallback={<SkeletonSearch />}>
                  <PlanDetailWish />
                </Suspense>
              </ErrorBoundary>
            )}
          </>
        )}
      </div>
      <DesktopMapDetail />
      {isVisible && <PlaceList />}
    </>
  );
}
