import Map from '../../../components/map/Map';
import styles from '../assets/map.module.css';

export default function SpotMap() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>장소 정보</h3>
        <p className={styles.updateBtn}>정보 업데이트</p>
      </div>
      <div className={styles.mapBox}>
        <div className={styles.map}>
          <Map setMap={() => {}} />
        </div>
        <div className={styles.mapInfo}>
          <p className={styles.info}>부산 해운대구 해운대로 570번길 </p>
          <p className={styles.func}>주소복사</p>
        </div>
      </div>
    </section>
  );
}
