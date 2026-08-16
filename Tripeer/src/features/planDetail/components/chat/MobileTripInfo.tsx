import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../store/store';
import styles from '../../assets/chat/info.module.css';
import { useMemo } from 'react';
import { truncateText } from '../../../../utils/utilString';

export default function MobileTripInfo() {
  const [townList, startDay, endDay] = zustandStore(
    useShallow((state) => [
      state.room_townList,
      state.room_startDay,
      state.room_endDay,
    ]),
  );

  const destination = useMemo(() => {
    if (townList.length > 0) {
      const townTitles = townList.map((townInfo) => {
        return townInfo.title;
      });
      return truncateText(townTitles.join(', '), 15);
    }
    return '';
  }, [townList]);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '280px',
        justifyContent: 'center',
        gap: '50px',
        padding: '30px',
      }}
    >
      <div className={styles.info}>
        <h4 className={styles.subTitle}>여행지</h4>
        <p>{destination}</p>
      </div>
      <div className={styles.info}>
        <h4 className={styles.subTitle}>여행 기간</h4>
        <p>{`${startDay} ~ ${endDay}`}</p>
      </div>
    </div>
  );
}
