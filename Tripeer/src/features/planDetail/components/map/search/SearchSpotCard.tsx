import styles from '../../../assets/map/mapNav/searchContent.module.css';
import mapIcon from '../../../../../assets/button/mapIcon_gray.svg';
import unlikeIcon from '../../../../../assets/button/heart_empty.svg';

export default function SearchSpotCard() {
  return (
    <div className={styles.cardBox}>
      <div className={styles.cardImg}></div>
      <div className={styles.cardContentBox}>
        <div className={styles.cardTopContent}>
          <p className={styles.spotTitle}>인터불고엑스코 호텔</p>
          <div className={styles.contentTypeBox}>
            <div className={styles.contentTypeIcon}>👍</div>
            <p className={styles.contentTypeText}>숙박</p>
          </div>
        </div>
        <div className={styles.addrBox}>
          <img src={mapIcon} alt="address-icon" className={styles.addrIcon} />
          <p className={styles.addrText}>대한민국 대구 북구 유통단지로 80</p>
        </div>
        <div className={styles.cardBotContent}>
          <div className={styles.likeBtnBox}>
            <img
              src={unlikeIcon}
              className={styles.likeIcon}
              alt="unlike-btn"
            />
          </div>
          <div className={styles.addBucketBtn}>여행지 추가</div>
        </div>
      </div>
    </div>
  );
}
