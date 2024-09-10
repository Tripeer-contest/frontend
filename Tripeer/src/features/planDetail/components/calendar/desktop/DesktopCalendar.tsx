import styles from '../../../assets/calendar/Desktop/calendar.module.css';
import LeftSide from './leftSide/LeftSide.tsx';
import RightSide from './rightSide/RightSide.tsx';

const DesktopCalendar = () => {
  return (
    <main className={styles.container}>
      <LeftSide />
      <RightSide />
    </main>
  );
};

export default DesktopCalendar;
