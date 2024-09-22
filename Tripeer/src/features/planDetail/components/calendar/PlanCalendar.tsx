import styles from '../../assets/calendar/calendar.module.css';
import PlanShortNav from '../PlanShortNav.tsx';
import useIsMobileSize from '../../hooks/useIsMobileSize.tsx';
import MobileCalendar from './mobile/MobileCalendar.tsx';
import DesktopCalendar from './desktop/DesktopCalendar.tsx';
import PlanNavigate from './common/PlanNavigate.tsx';

export default function PlanCalendar() {
  const isMobile = useIsMobileSize();

  return (
    <main className={styles.container}>
      <aside className={styles.nav}>
        <PlanShortNav />
      </aside>
      <section className={styles.contentBox}>
        {isMobile ? <MobileCalendar /> : <DesktopCalendar />}
      </section>
      <PlanNavigate startDay={1} />
    </main>
  );
}
