import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../store/store';
import styles from '../../assets/calendar.module.css';

const dateToString = (dateInfo: string) => {
  if (dateInfo === '') return '00년 0월 0일';
  let [year, month, date] = dateInfo.split('-');
  year = year.slice(2);
  month = month.startsWith('0') ? month.slice(1) : month;
  date = date.startsWith('0') ? date.slice(1) : date;
  return `${year}년 ${month}월 ${date}일`;
};

export default function CalendarHeader() {
  const [startDay, endDay] = zustandStore(
    useShallow((state) => [state.startDay, state.endDay]),
  );
  return (
    <div className={styles.header}>
      <div className={styles.dateSection}>
        <p className={styles.dateTitle}>출발일</p>
        <p>{dateToString(startDay)}</p>
      </div>
      <span className={styles.datePart}>~</span>
      <div className={styles.dateSection}>
        <p className={styles.dateTitle}>도착일</p>
        <p>{dateToString(endDay)}</p>
      </div>
    </div>
  );
}
