import styles from '../../../assets/map/map.module.css';
import searchIcon from '../../../assets/map/mapNav/assets/search.svg';
import searchIconActive from '../../../assets/map/mapNav/assets/search_Active.svg';
import mapIcon from '../../../assets/map/mapNav/assets/map.svg';
import mapIconActive from '../../../assets/map/mapNav/assets/map_Active.svg';
import listIcon from '../../../assets/map/mapNav/assets/list.svg';
import listIconActive from '../../../assets/map/mapNav/assets/list_Active.svg';

export default function MapMenu({
  active,
  activeComponent,
}: {
  active: string;
  activeComponent: (str: string) => void;
}) {
  return (
    <div className={styles.mapNavBox}>
      <div
        className={styles.mapBtnBox}
        onClick={() => {
          activeComponent('search');
        }}
      >
        {active === 'search' ? (
          <img src={searchIconActive} className={styles.Icon} />
        ) : (
          <img src={searchIcon} className={styles.Icon} />
        )}
        <p style={active === 'search' ? { color: '#04ACB5' } : undefined}>
          여행지 검색
        </p>
      </div>
      <div
        className={styles.mapBtnBox}
        onClick={() => {
          activeComponent('map');
        }}
      >
        {active === 'map' ? (
          <img src={mapIconActive} className={styles.Icon} />
        ) : (
          <img src={mapIcon} className={styles.Icon} />
        )}
        <p style={active === 'map' ? { color: '#04ACB5' } : undefined}>
          여행 지도
        </p>
      </div>
      <div
        className={styles.mapBtnBox}
        onClick={() => {
          activeComponent('list');
        }}
      >
        {active === 'list' ? (
          <img src={listIconActive} className={styles.Icon} />
        ) : (
          <img src={listIcon} className={styles.Icon} />
        )}
        <p style={active === 'list' ? { color: '#04ACB5' } : undefined}>
          여행지 목록
        </p>
      </div>
    </div>
  );
}
