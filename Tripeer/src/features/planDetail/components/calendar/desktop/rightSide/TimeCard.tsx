import styles from '../../../../assets/calendar/Desktop/rightSide/timeCard.module.css';
import transportImage from '../../../../assets/calendar/assets/transport.png';
import zustandStore from '../../../../../../store/store.tsx';
// import carImage from '../../../../assets/calendar/assets/car.png';

interface Props {
  isDragging: boolean;
  idx: number;
  itemIdx: number;
}

const TimeCard = ({ isDragging, idx, itemIdx }: Props) => {
  const timeYList = zustandStore((state) => state.room_timeYList);

  return (
    !isDragging && (
      <main className={styles.container}>
        <div className={styles.line} />
        <section className={styles.box}>
          <img
            src={transportImage}
            alt={'Option Image'}
            className={styles.image}
          />
          <p className={styles.time}>{timeYList[idx]?.[itemIdx]?.[0]}</p>
        </section>
        <div className={styles.line} />
      </main>
    )
  );
};

export default TimeCard;
