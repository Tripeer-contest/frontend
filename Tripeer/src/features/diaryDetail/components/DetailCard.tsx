import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store';
import { makeDayToDotFullString } from '../../../utils/utilDate';
import { DayListCard } from '../../diary/types/DiaryTypes';
import DayListContent from './DayListContent';
import DiaryMap from './DiaryMap';
import styles from './detailCard.module.css';
import { useCallback } from 'react';

export default function DetailCard({
  card,
  idx,
}: {
  card: DayListCard;
  idx: number;
}) {
  const [dayScroll, setDayScroll] = zustandStore(
    useShallow((state) => [state.diaryDayScroll, state.setDiaryDayScroll]),
  );
  const setContainerOffset = useCallback(
    (elem: HTMLDivElement | null) => {
      if (
        dayScroll &&
        typeof idx === 'number' &&
        dayScroll[idx] === -1 &&
        elem
      ) {
        const newDayScroll = [...dayScroll];
        newDayScroll[idx] = elem.offsetTop;
        setDayScroll(newDayScroll);
      }
    },
    [dayScroll, idx, setDayScroll],
  );

  return (
    <div className={styles.container} ref={setContainerOffset}>
      <div className={styles.line} />
      <header className={styles.dateBox}>
        <p>{idx + 1}일차,</p>
        <p></p>
        <p>{makeDayToDotFullString(card.date)}</p>
      </header>
      <div className={styles.diaryMainBox}>
        <DiaryMap></DiaryMap>
        <DayListContent card={card}></DayListContent>
      </div>
    </div>
  );
}
