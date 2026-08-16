import CalendarHeader from './CalendarHeader';
import styles from '../../assets/calendar.module.css';
import { getCurrentDate } from '../../../../utils/utilDate';
import Calendar from './Calendar';

const MONTH_CNT = { length: 24 }; // 2년치

export default function Calendars() {
  const { currentYear, currentMonth } = getCurrentDate();
  return (
    <section className={styles.container}>
      <CalendarHeader />
      <div className={styles.calendarBox}>
        {Array.from(MONTH_CNT).map((_, idx) => (
          <Calendar year={currentYear} month={currentMonth + idx} key={idx} />
        ))}
      </div>
    </section>
  );
}
