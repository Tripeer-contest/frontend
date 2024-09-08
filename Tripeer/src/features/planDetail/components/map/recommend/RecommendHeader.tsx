import styles from '../../../assets/map/header.module.css';
import PlanHamburger from '../../common/PlanHamburger';

export default function RecommendHeader() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.funcBox}>
            <PlanHamburger />
            <p className={styles.title}>대구광역시</p>
        </div>
      </header>
    </>
  );
}
