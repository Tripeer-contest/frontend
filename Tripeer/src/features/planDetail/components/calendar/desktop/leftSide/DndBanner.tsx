import styles from '../../../../assets/calendar/Desktop/leftSide/dndBanner.module.css';
import { Droppable } from '@hello-pangea/dnd';
import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../../../store/store.tsx';
import DndCard from './DndCard.tsx';

const DndBanner = () => {
  const [totalYList] = zustandStore(
    useShallow((state) => [state.room_totalYList]),
  );

  return (
    <Droppable droppableId="0">
      {(provided) => (
        <div
          className={styles.container}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {totalYList[0].map((item, idx) => (
            <DndCard item={item} idx={idx} key={item.spotInfoId} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DndBanner;
