import { Fragment, useRef, useState } from 'react';
import zustandStore from '../../../../../store/store';
import styles from '../../../assets/calendar/common/nav.module.css';
import backIcon from '../../../../../assets/button/back.svg';
import arrowIcon from '../../../../../assets/button/arrow.svg';
import { useShallow } from 'zustand/react/shallow';
import { addDays, makeDayToDotFullString } from '../../../../../utils/utilDate';
import NavigateCard from './NavigateCard';
import { SpotYInterface } from '../../../../../store/room/RoomSliceState';
import NavigateBar from './NavigateBar';

export default function PlanNavigate({
  startIdx,
  closeHandler,
}: {
  startIdx: number;
  closeHandler: () => void;
}) {
  const [doc, startDay] = zustandStore(
    useShallow((state) => [state.y_doc, state.room_startDay]),
  );
  const [dayIdx, setDayIdx] = useState(startIdx > 0 ? startIdx : 1);
  const timeList = useRef(doc?.getArray('timeYList').toJSON());
  const totalList = useRef(doc?.getArray('totalYList').toJSON());
  const setPrevDay = () => {
    if (!timeList.current) return;
    if (dayIdx === 1) setDayIdx(timeList.current.length - 1);
    else setDayIdx((prev) => prev - 1);
  };
  const setNextDay = () => {
    if (!timeList.current) return;
    if (dayIdx === timeList.current.length - 1) setDayIdx(1);
    else setDayIdx((prev) => prev + 1);
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>여행지 경로</span>
        <img
          src={backIcon}
          alt="back-icon"
          className={styles.backBtn}
          onClick={closeHandler}
        />
      </header>
      <section className={styles.navigateBox}>
        <div className={styles.controller}>
          <img
            src={arrowIcon}
            alt="left"
            style={{ transform: 'rotate(180deg)' }}
            onClick={setPrevDay}
          />
          <div>
            <p className={styles.dayString}>{dayIdx}일차</p>
            <p className={styles.dayInfoString}>
              {makeDayToDotFullString(addDays(startDay, dayIdx - 1))}
            </p>
          </div>
          <img src={arrowIcon} alt="right" onClick={setNextDay} />
        </div>
        {totalList.current &&
          totalList.current[dayIdx].map((item: SpotYInterface, idx: number) => (
            <Fragment key={item.spotInfoId}>
              <NavigateCard item={item} idx={idx + 1} />
              {totalList.current &&
                idx !== totalList.current[dayIdx].length - 1 && (
                  <NavigateBar
                    timeObject={
                      timeList.current ? timeList.current[dayIdx][idx] : {}
                    }
                  />
                )}
            </Fragment>
          ))}
        {totalList.current && totalList.current[dayIdx].length === 0 && (
          <div className={styles.emptyDate}>
            해당 일차에 계획하신 여행지가 없습니다.
          </div>
        )}
      </section>
    </div>
  );
}
