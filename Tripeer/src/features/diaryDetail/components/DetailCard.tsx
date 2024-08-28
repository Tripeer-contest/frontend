import { makeDayToDotFullString } from '../../../utils/utilDate';
import { DayListCard } from '../../diary/types/DiaryTypes';
import DiaryMap from './DiaryMap';
import styles from './detailCard.module.css';

export default function DetailCard({
  card,
  idx,
}: {
  card: DayListCard;
  idx: number;
}) {
  console.log(card, idx);

  return (
    <div className={styles.container}>
      <header className={styles.dateBox}>
        <p>{idx + 1}일차,</p>
        <p></p>
        <p>{makeDayToDotFullString(card.date)}</p>
      </header>

      <DiaryMap></DiaryMap>
    </div>
  );
}
