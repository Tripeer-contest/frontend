import styles from '../../../../assets/calendar/Desktop/rightSide/timeCard.module.css';
import betweenImage from '../../../../assets/calendar/assets/between.png';
import car2Image from '../../../../assets/calendar/assets/car2.png';
import busImage from '../../../../assets/calendar/assets/bus.png';
import airImage from '../../../../assets/calendar/assets/air.png';
import shipImage from '../../../../assets/calendar/assets/ship.png';
import car3Image from '../../../../assets/calendar/assets/car3.png';
import bus3Image from '../../../../assets/calendar/assets/bus3.png';
import ship3Image from '../../../../assets/calendar/assets/ship3.png';
import air3Image from '../../../../assets/calendar/assets/air3.png';
import useTimeCard from '../../hooks/useTimeCard.tsx';
import zustandStore from '../../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';
import React from 'react';
import useReAtoB from '../../hooks/useReAtoB.tsx';

interface Props {
  isDragging: boolean;
  idx: number;
  itemIdx: number;
}

const imageArr = [car3Image, bus3Image, ship3Image, air3Image];
const imageArr2 = [car2Image, busImage, shipImage, airImage];
const optionName = ['자가용', '대중교통', '항해', '항공'];

const TimeCard = ({ isDragging, idx, itemIdx }: Props) => {
  const [timeYList, totalYList] = zustandStore(
    useShallow((state) => [state.room_timeYList, state.room_totalYList]),
  );

  const {
    newOnclickHandler,
    isFading,
    close,
    PlanModal,
    onClickBackground,
    onChangeOption,
  } = useTimeCard(idx, itemIdx);

  const option = timeYList[idx]?.[itemIdx]?.option;
  const time = timeYList[idx]?.[itemIdx]?.time[option];
  const timeArr = timeYList[idx]?.[itemIdx]?.time;

  useReAtoB(time, idx, itemIdx);

  return (
    !isDragging && (
      <main
        className={`${styles.container} ${isFading && time !== '계산중' ? styles.fadeIn : ''}`}
        onClick={() => newOnclickHandler()}
      >
        <div className={styles.line} />
        <section className={styles.box}>
          {time?.length < 8 && (
            <img
              src={imageArr[option]}
              alt={'Option Image'}
              className={styles.image}
            />
          )}
          <p className={time?.length > 8 ? styles.error : styles.time}>
            {timeYList[idx][itemIdx] === undefined ? '계산중' : time}
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
              <p className={styles.modalPlaceP}>
                {totalYList[idx][itemIdx].title}
              </p>
              <img
                src={betweenImage}
                alt={'Between Image'}
                className={styles.betweenImage}
              />
              <p className={styles.modalPlaceP}>
                {totalYList[idx][itemIdx + 1].title}
              </p>
            </div>
            {timeArr?.map((item, index) => (
              <React.Fragment key={`${item}-${index}`}>
                <div className={styles.modalLine} />
                <div
                  className={styles.modalPlaceBox}
                  onClick={(e) => onChangeOption(e, index, close)}
                >
                  <img
                    src={imageArr2[index]}
                    alt={'Transport Image'}
                    className={styles.modalImage}
                  />
                  <p>
                    {timeArr[index].length < 8 && optionName[index]}{' '}
                    {timeArr[index]}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </PlanModal>
      </main>
    )
  );
};

export default TimeCard;
