import styles from '../../../../assets/calendar/Desktop/rightSide/dndBanner.module.css';
import { Droppable } from '@hello-pangea/dnd';
import React from 'react';
import { useShallow } from 'zustand/react/shallow';
import {
  makeDayToDotFullString,
  addDays,
} from '../../../../../../utils/utilDate.ts';
import OpBtn from './OpBtn.tsx';
import DndCard from './DndCard.tsx';
import zustandStore from '../../../../../../store/store.tsx';

interface Props {
  idx: number;
}

const DndBanner = ({ idx }: Props) => {
  const [totalYList, startDay, blockYList] = zustandStore(
    useShallow((state) => [
      state.room_totalYList,
      state.room_startDay,
      state.room_blockYList,
    ]),
  );

  const now = addDays(startDay, idx);
  const day = makeDayToDotFullString(now);

  return (
    <main className={styles.container}>
      <section className={styles.titleBox}>
        <div className={styles.dayBox}>
          <p className={styles.xDay}>{idx}일차</p>
          <p className={styles.day}>{day}</p>
        </div>
        <OpBtn day={day} idx={idx} />
      </section>
      <div className={totalYList[idx].length > 3 ? styles.box : styles.minBox}>
        <Droppable droppableId={`${idx}`} isDropDisabled={blockYList[idx]}>
          {(provided) => (
            <div
              className={styles.droppableBox}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {totalYList[idx].map((item, itemIdx) => (
                <React.Fragment key={item.spotInfoId}>
                  <DndCard
                    item={item}
                    itemIdx={itemIdx}
                    length={totalYList[idx].length}
                    idx={idx}
                  />
                </React.Fragment>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {blockYList[idx] && (
          <div className={styles.cover}>
            <div className={styles.ball} />
            <div className={styles.ball} />
            <div className={styles.ball} />
          </div>
        )}
      </div>
    </main>
  );
};

export default DndBanner;
