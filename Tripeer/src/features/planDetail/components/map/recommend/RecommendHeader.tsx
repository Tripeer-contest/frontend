import styles from '../../../assets/map/header.module.css';
import PlanHamburger from '../../common/PlanHamburger';

export default function RecommendHeader() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.funcBox}>
          <div className={styles.leftSection}>
            <PlanHamburger />
            <p className={styles.title}>대구광역시</p>
          </div>
          <div className={styles.newPlaceBtn}>신규 장소 등록</div>
        </div>
      </header>
    </>
  );
}
