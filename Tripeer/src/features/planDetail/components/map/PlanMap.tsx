import styles from '../../assets/map/map.module.css';
import PlanShortNav from '../PlanShortNav';

export default function PlanMap() {
  return (
    <main className={styles.container}>
      <aside className={styles.nav}>
        <PlanShortNav />
      </aside>
    </main>
  );
}
