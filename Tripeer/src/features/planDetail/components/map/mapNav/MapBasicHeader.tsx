import styles from '../../../assets/map/mapNav/placeMap.module.css';
import LightSearchBar from '../../common/LightSearchBar';
import PlanHamburger from '../../common/PlanHamburger';
import MapCategory from './MapCategory';
import add_icon from '../../../../../assets/button/add_map.svg';
import zustandStore from '../../../../../store/store';

export default function MapBasicHeader() {
  const keyword = zustandStore((state) => state.room_mapSearchKeyword);
  return (
    <>
      {keyword === '' && (
        <>
          <div className={styles.topBox}>
            <div className={styles.hamburgerBtn}>
              <PlanHamburger />
            </div>
            <LightSearchBar
              className={styles.search}
              placeholder="여행지를 입력하세요"
            />
            <div className={styles.addPlaceBtn}>
              <img src={add_icon} alt="add-map" />
            </div>
          </div>
          <div className={styles.categoryBox}>
            <MapCategory />
          </div>
        </>
      )}
    </>
  );
}
