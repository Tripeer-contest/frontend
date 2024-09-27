import styles from '../../../assets/map/header.module.css';
import PlanHamburger from '../../common/PlanHamburger';
import TownController from '../mapNav/TownController';

export default function SearchHeader() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.funcBox}>
          <div className={styles.leftSection}>
            <PlanHamburger />
            <TownController />
          </div>
        </div>
      </header>
    </>
  );
}
