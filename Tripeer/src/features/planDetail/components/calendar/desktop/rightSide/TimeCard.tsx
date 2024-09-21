import styles from '../../../../assets/calendar/Desktop/rightSide/timeCard.module.css';
import transportImage from '../../../../assets/calendar/assets/transport.png';
import zustandStore from '../../../../../../store/store.tsx';
import useTimeCard from '../../hooks/useTimeCard.tsx';
import carImage from '../../../../assets/calendar/assets/car.png';
import betweenImage from '../../../../assets/calendar/assets/between.png';
import car2Image from '../../../../assets/calendar/assets/car2.png';
import busImage from '../../../../assets/calendar/assets/bus.png';
import airImage from '../../../../assets/calendar/assets/air.png';
import shipImage from '../../../../assets/calendar/assets/ship.png';

interface Props {
  isDragging: boolean;
  idx: number;
  itemIdx: number;
}

const TimeCard = ({ isDragging, idx, itemIdx }: Props) => {
  const timeYList = zustandStore((state) => state.room_timeYList);
  const { newOnclickHandler, isFading, close, PlanModal, onClickBackground } =
    useTimeCard(idx, itemIdx);
  const option = timeYList[idx]?.[itemIdx]?.[1];

  return (
    !isDragging && (
      <main
        className={`${styles.container} ${isFading && timeYList[idx]?.[itemIdx]?.[0] !== '계산중' ? styles.fadeIn : ''}`}
        onClick={() => newOnclickHandler()}
      >
        <div className={styles.line} />
        <section className={styles.box}>
          {option !== '2' && (
            <img
              src={option === '0' ? carImage : transportImage}
              alt={'Option Image'}
              className={
                option === '0' ? styles.carImage : styles.transportImage
              }
            />
          )}
          <p className={option === '2' ? styles.error : styles.time}>
            {timeYList[idx][itemIdx] === undefined
              ? '계산중'
              : timeYList[idx]?.[itemIdx]?.[0]}
          </p>
        </section>
        <div className={styles.line} />
        <PlanModal
          onClose={close}
          onClick={() => onClickBackground(close)}
          className={styles.modalContainer}
        >
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <p className={styles.modalTitle}>교통수단 선택</p>
            <div className={styles.modalTileBox}>
              <p className={styles.modalPlaceP}>place1</p>
              <img
                src={betweenImage}
                alt={'Between Image'}
                className={styles.betweenImage}
              />
              <p className={styles.modalPlaceP}>place2</p>
            </div>
            <div className={styles.modalLine} />
            <div className={styles.modalPlaceBox}>
              <img
                src={car2Image}
                alt={'Car Image'}
                className={styles.modalImage}
              />
              <p>자가용-60-분</p>
            </div>
            <div className={styles.modalLine} />
            <div className={styles.modalPlaceBox}>
              <img
                src={busImage}
                alt={'Bus Image'}
                className={styles.modalImage}
              />
              <p>대중교통-60-분</p>
            </div>
            <div className={styles.modalLine} />
            <div className={styles.modalPlaceBox}>
              <img
                src={shipImage}
                alt={'Ship Image'}
                className={styles.modalImage}
              />
              <p>항해-60-분</p>
            </div>
            <div className={styles.modalLine} />
            <div className={styles.modalPlaceBox}>
              <img src={airImage} alt={'Air'} className={styles.modalImage} />
              <p>항공-60-분</p>
            </div>
          </div>
        </PlanModal>
      </main>
    )
  );
};

export default TimeCard;
