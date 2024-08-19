import styles from '../../assets/calendar.module.css';
import { createMonthDayList, isEqualDate } from '../../../../utils/utilDate';

import { useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../store/store';
import { DateInfo } from '../../../../types/PlanTypes';
import { padStart } from '../../../../utils/utilString';

const WEEK = ['일', '월', '화', '수', '목', '금', '토'];

export default function Calendar({
  year,
  month,
}: {
  year: number;
  month: number;
}) {
  const [startDay, endDay, setStartDay, setEndDay] = zustandStore(
    useShallow((state) => [
      state.startDay,
      state.endDay,
      state.setStartDay,
      state.setEndDay,
    ]),
  );
  const monthDayList = useMemo(
    () => createMonthDayList(year, month),
    [year, month],
  );

  const thisDate = new Date(year, month);
  const thisYear = thisDate.getFullYear();
  const thisMonth = thisDate.getMonth() + 1;

  const getActiveStyle = (dateInfo: DateInfo) => {
    if (dateInfo.style === 'prev' || (startDay === '' && endDay === '')) return;
    const startTime = new Date(startDay);
    const endTime = new Date(endDay);
    const currentTime = new Date(thisYear, thisMonth - 1, dateInfo.date);
    if (
      isEqualDate(startTime, currentTime) ||
      isEqualDate(endTime, currentTime)
    ) {
      return { backgroundColor: '#4fbdb7', color: '#fff', borderRadius: '5px' };
    }
    if (
      startTime.getTime() < currentTime.getTime() &&
      currentTime.getTime() < endTime.getTime()
    )
      return {
        border: '1px solid #4fbdb7',
        borderRadius: '5px',
      };
  };

  const clickHandler = (dateInfo: number) => {
    const year = thisYear.toString();
    const month = padStart(thisMonth.toString(), 2, '0');
    const date = padStart(dateInfo.toString(), 2, '0');
    const dateString = `${year}-${month}-${date}`;
    if (startDay !== '' && endDay !== '') {
      setStartDay('');
      setEndDay('');
    } else if (startDay === '') {
      setStartDay(dateString);
    } else {
      new Date(startDay).getTime() > new Date(dateString).getTime()
        ? setStartDay(dateString)
        : setEndDay(dateString);
    }
  };

  return (
    <div>
      <p
        className={styles.calendarInfo}
      >{`${thisYear.toString().slice(2)}년 ${thisMonth}월`}</p>
      <div className={styles.calendar}>
        {WEEK.map((data) => (
          <p key={data} className={styles.week}>
            {data}
          </p>
        ))}
        {monthDayList.map((md) => (
          <p
            key={md.id}
            className={styles[md.style]}
            style={getActiveStyle(md)}
            onClick={() => clickHandler(md.date)}
          >
            {md.date}
          </p>
        ))}
      </div>
    </div>
  );
}
