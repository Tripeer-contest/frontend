import styles from '../../../../assets/calendar/Desktop/rightSide/topBanner.module.css';
import image from '../../../../assets/calendar/assets/calendar.png';
import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../../../store/store.tsx';
import { makeDayToDotFullString } from '../../../../../../utils/utilDate.ts';

const TopBanner = () => {
  const [startDay, endDay] = zustandStore(
    useShallow((state) => [state.room_startDay, state.room_endDay]),
  );

  const st = makeDayToDotFullString(startDay);
  const ed = makeDayToDotFullString(endDay);

  return (
    <main className={styles.container}>
      <img src={image} alt={'Calendar Image'} className={styles.image} />
      <p className={styles.title}>여행일정</p>
      <p className={styles.title}>
        {st} ~ {ed}
      </p>
    </main>
  );
};

export default TopBanner;
