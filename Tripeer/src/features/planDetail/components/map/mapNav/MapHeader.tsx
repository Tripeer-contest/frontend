import styles from '../../../assets/map/mapNav/placeMap.module.css';
import PlanHamburger from '../../common/PlanHamburger';

export default function MapHeader() {
  return (
    <header className={styles.headerBox}>
      <div className={styles.hamburgerBtn}>
        <PlanHamburger />
      </div>
    </header>
  );
}
