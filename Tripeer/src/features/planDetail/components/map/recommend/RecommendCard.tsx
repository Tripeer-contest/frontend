import styles from '../../../assets/map/mapNav/recommend.module.css';
import mapIcon from '../../../../../assets/button/mapIcon_gray.svg';
import heartIcon from '../../../../../assets/button/heart_empty.svg';

export default function RecommendCard({ card }: { card: number }) {
  return (
    <div className={styles.cardBox}>
      <div className={styles.cardImg}></div>
      <p className={styles.placeName}>{card}</p>
      <div className={styles.addressBox}>
        <img src={mapIcon} className={styles.addressIcon} alt="map-icon" />
        <p className={styles.addressText}></p>
      </div>
      <section className={styles.bottomSection}>
        <div className={styles.likeIconBox}>
          <img src={heartIcon} className={styles.likeIcon} alt="like-icon" />
        </div>
        <div className={styles.addPlaceListBtn}>여행지 추가</div>
      </section>
    </div>
  );
}
