import styles from '../../../assets/map/map.module.css';
import recommendIcon from '../../../assets/map/mapNav/assets/recommend.svg';
import recommendActive from '../../../assets/map/mapNav/assets/recommend_Active.svg';
import mapIcon from '../../../assets/map/mapNav/assets/map.svg';
import mapIconActive from '../../../assets/map/mapNav/assets/map_Active.svg';
import listIcon from '../../../assets/map/mapNav/assets/list.svg';
import listIconActive from '../../../assets/map/mapNav/assets/list_Active.svg';

export default function MapMenu({
  page,
  pageHandler,
}: {
  page: number;
  pageHandler: (idx: number) => void;
}) {
  return (
    <div className={styles.mapNavBox}>
      <div
        className={styles.mapBtnBox}
        onClick={() => {
          pageHandler(0);
        }}
      >
        {page === 0 ? (
          <img src={recommendActive} className={styles.Icon} />
        ) : (
          <img src={recommendIcon} className={styles.Icon} />
        )}
        <p style={page === 0 ? { color: '#04ACB5' } : undefined}>여행지 추천</p>
      </div>
      <div
        className={styles.mapBtnBox}
        onClick={() => {
          pageHandler(1);
        }}
      >
        {page === 1 ? (
          <img src={mapIconActive} className={styles.Icon} />
        ) : (
          <img src={mapIcon} className={styles.Icon} />
        )}
        <p style={page === 1 ? { color: '#04ACB5' } : undefined}>지도 검색</p>
      </div>
      <div
        className={styles.mapBtnBox}
        onClick={() => {
          pageHandler(2);
        }}
      >
        {page === 2 ? (
          <img src={listIconActive} className={styles.Icon} />
        ) : (
          <img src={listIcon} className={styles.Icon} />
        )}
        <p style={page === 2 ? { color: '#04ACB5' } : undefined}>여행지 목록</p>
      </div>
    </div>
  );
}
