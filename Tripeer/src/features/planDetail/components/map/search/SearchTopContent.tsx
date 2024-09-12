import LightSearchBar from '../../common/LightSearchBar';
import styles from '../../../assets/map/mapNav/searchContent.module.css';
import MapCategory from '../mapNav/MapCategory';

export default function SearchTopContent() {
  return (
    <div className={styles.contentContainer}>
      <LightSearchBar
        className={styles.search}
        placeholder="여행지를 입력하세요"
      />
      <MapCategory />
    </div>
  );
}
