import styles from '../../../assets/calendar/Mobile/calendar.module.css';
import PlanHamburger from '../../common/PlanHamburger.tsx';
import zustandStore from '../../../../../store/store.tsx';

const Header = () => {
  const planTitle = zustandStore((state) => state.room_title);
  return (
    <main className={styles.header}>
      <div className={styles.funcBox}>
        <PlanHamburger />
        <p className={styles.title}>{planTitle}</p>
      </div>
    </main>
  );
};

export default Header;
