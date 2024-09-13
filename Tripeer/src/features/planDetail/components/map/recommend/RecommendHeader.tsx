import styles from '../../../assets/map/mapNav/recommend.module.css';
import PlanHamburger from '../../common/PlanHamburger';
import TownController from '../mapNav/TownController';

export default function RecommendHeader() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.funcBox}>
          <PlanHamburger />
          <TownController />
        </div>
      </header>
    </>
  );
}
