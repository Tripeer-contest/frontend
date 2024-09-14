import styles from '../../../assets/map/mapNav/searchPlace.module.css';
import btnImg from '../../../assets/map/mapNav/assets/openListBtn.svg';
import SearchHeader from '../search/searchHeader';
import { useState } from 'react';
import PlaceList from './PlaceList';
import SearchTopContent from '../search/SearchTopContent';
import RecommendContent from '../recommend/RecommendContent';
import SearchMainContent from '../search/SearchMainContent';
import zustandStore from '../../../../../store/store';

export default function DesktopSearch() {
  const [isVisible, setIsVisible] = useState(false);
  const [isRecommendSelected, setIsRecommendSelected] = useState(true);
  const sortType = zustandStore((state) => state.room_sortType);
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
        ></img>
        <SearchTopContent setIsRecommendSelected={setIsRecommendSelected} />

        {isRecommendSelected ? (
          <RecommendContent />
        ) : (
          <>
            {sortNum[sortType] ? (
              <SearchMainContent sortNum={sortNum[sortType]} />
            ) : undefined}
          </>
        )}
      </div>
      {isVisible && <PlaceList />}
    </>
  );
}
