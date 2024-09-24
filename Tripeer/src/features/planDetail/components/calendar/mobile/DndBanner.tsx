import styles from '../../../assets/calendar/Mobile/dndBanner.module.css';
import { Droppable } from '@hello-pangea/dnd';
import React from 'react';
import DndCard from '../desktop/rightSide/DndCard.tsx';
import zustandStore from '../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';

interface Props {
  idx: number;
}

const DndBanner = ({ idx }: Props) => {
  const [totalYList, blockYList] = zustandStore(
    useShallow((state) => [state.room_totalYList, state.room_blockYList]),
  );

  return (
    <main className={styles.container}>
      <Droppable droppableId={`${idx + 1}`}>
        {(provided) => (
          <div
            className={styles.droppableBox}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {totalYList[idx + 1].map((item, itemIdx) => (
              <React.Fragment key={item.spotInfoId}>
                <DndCard
                  item={item}
                  itemIdx={itemIdx}
                  length={totalYList[idx + 1].length}
                  idx={idx + 1}
                />
              </React.Fragment>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {blockYList[idx + 1] && <div className={styles.cover}></div>}
    </main>
  );
};

export default DndBanner;
