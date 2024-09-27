import styles from '../../../assets/map/mapNav/searchContent.module.css';
import MapCategory from '../mapNav/MapCategory';
import DesktopLightSearchBar from '../../common/DesktopLightSearchBar';

export default function SearchTopContent({
  setIsRecommendSelected,
}: {
  setIsRecommendSelected: (params: boolean) => void;
}) {
  return (
    <div className={styles.contentContainer}>
      <DesktopLightSearchBar
        setIsRecommendSelected={setIsRecommendSelected}
        className={styles.search}
        placeholder="여행지를 입력하세요"
      />
      <MapCategory
        setIsRecommendSelected={setIsRecommendSelected}
        categoryList={['추천', '전체', '숙박', '맛집', '명소', '즐겨찾기']}
      />
    </div>
  );
}
