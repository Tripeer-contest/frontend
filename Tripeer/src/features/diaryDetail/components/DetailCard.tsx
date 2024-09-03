import { makeDayToDotFullString } from '../../../utils/utilDate';
import { DayListCard } from '../../diary/types/DiaryTypes';
import DayListContent from './DayListContent';
import DiaryMap from './DiaryMap';
import styles from './detailCard.module.css';

export default function DetailCard({
  card,
  idx,
}: {
  card: DayListCard;
  idx: number;
}) {
  return (
    <div className={styles.container}>
      <div className={styles.line} />
      <header className={styles.dateBox}>
        <p>{idx + 1}일차,</p>
        <p></p>
        <p>{makeDayToDotFullString(card.date)}</p>
      </header>
      <div className={styles.diaryMainBox}>
        <DiaryMap></DiaryMap>
        <DayListContent></DayListContent>
      </div>
    </div>
  );
}
