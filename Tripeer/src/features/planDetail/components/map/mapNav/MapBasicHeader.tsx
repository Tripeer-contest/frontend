import styles from '../../../assets/map/mapNav/placeMap.module.css';
import LightSearchBar from '../../common/LightSearchBar';
import PlanHamburger from '../../common/PlanHamburger';
import MapCategory from './MapCategory';
import zustandStore from '../../../../../store/store';
import SearchHeader from '../search/searchHeader';

export default function MapBasicHeader() {
  const keyword = zustandStore((state) => state.room_mapSearchKeyword);
  return (
    <>
      {keyword === '' && (
        <>
          <SearchHeader />
          <div className={styles.topBox}>
            <div className={styles.hamburgerBtn}>
              <PlanHamburger />
            </div>
            <LightSearchBar
              className={styles.search}
              placeholder="여행지를 입력하세요"
            />
          </div>
          <div className={styles.categoryBox}>
            <MapCategory
              categoryList={[
                '여행지',
                '전체',
                '숙박',
                '맛집',
                '명소',
                '즐겨찾기',
              ]}
            />
          </div>
        </>
      )}
    </>
  );
}
