import styles from '../../../../assets/calendar/Desktop/rightSide/timeCard.module.css';
import transportImage from '../../../../assets/calendar/assets/transport.png';
import zustandStore from '../../../../../../store/store.tsx';
import useTimeCard from '../../hooks/useTimeCard.tsx';
import carImage from '../../../../assets/calendar/assets/car.png';

interface Props {
  isDragging: boolean;
  idx: number;
  itemIdx: number;
}

const TimeCard = ({ isDragging, idx, itemIdx }: Props) => {
  const timeYList = zustandStore((state) => state.room_timeYList);
  const { onClickHandler, isFading } = useTimeCard(idx, itemIdx);
  const option = timeYList[idx]?.[itemIdx]?.[1];

  return (
    !isDragging && (
      <main
        className={`${styles.container} ${isFading && timeYList[idx]?.[itemIdx]?.[0] !== '계산중' ? styles.fadeIn : ''}`}
        onClick={() => onClickHandler()}
      >
        <div className={styles.line} />
        <section className={styles.box}>
          {option !== '2' && (
            <img
              src={option === '0' ? transportImage : carImage}
              alt={'Option Image'}
              className={styles.image}
            />
          )}
          <p className={option === '2' ? styles.error : styles.time}>
            {timeYList[idx][itemIdx] === undefined
              ? '계산중'
              : timeYList[idx]?.[itemIdx]?.[0]}
          </p>
        </section>
        <div className={styles.line} />
      </main>
    )
  );
};

export default TimeCard;
