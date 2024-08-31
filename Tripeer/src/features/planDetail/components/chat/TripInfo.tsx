import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../store/store';
import styles from '../../assets/chat/info.module.css';
import { useMemo } from 'react';
import { truncateText } from '../../../../utils/utilString';

export default function TripInfo() {
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
    <div className={styles.infoBox}>
      <h3 className={styles.title}>여행 정보</h3>
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
