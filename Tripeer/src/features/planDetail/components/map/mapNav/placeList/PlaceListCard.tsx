import styles from '../../../../assets/map/mapNav/placeListContent.module.css';
import closeIcon from '../../../../../../assets/button/cancel_whiteGray.svg';
import mapIcon from '../../../../../../assets/button/mapIcon_gray.svg';
import { getCategoryStyle } from '../../../../../../data/categoryStyle';

export default function PlaceListCard() {
  getCategoryStyle;
  return (
    <div className={styles.cardBox}>
      <div className={styles.cardImg}></div>
      <section className={styles.cardSection}>
        <div className={styles.cardTopSection}>
          <div className={styles.spotTitle}>스파크랜드</div>
          <img src={closeIcon} className={styles.closeIcon} alt="delete-Btn" />
        </div>
        <div className={styles.cardMiddleSection}>
          <img className={styles.mapIcon} src={mapIcon} alt="map-icon" />
          <p className={styles.address}>대구 중구 동성로6길 61 레드존 7~9층</p>
        </div>
        <div className={styles.cardBottomSection}>
          <div className={styles.contentTypeBox}>
            <img
              src={getCategoryStyle('명소').icon}
              alt="category-icon"
              className={styles.contentIcon}
            />
            <p
              className={styles.content}
              style={{ color: getCategoryStyle('명소').color }}
            >
              {'명소'}
            </p>
          </div>
          <div className={styles.userImg}></div>
        </div>
      </section>
    </div>
  );
}
