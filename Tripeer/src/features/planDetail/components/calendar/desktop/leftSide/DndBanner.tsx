import styles from '../../../../assets/calendar/Desktop/leftSide/dndBanner.module.css';
import { Draggable, Droppable } from '@hello-pangea/dnd';
import zustandStore from '../../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';

const DndBanner = () => {
  const [totalYList] = zustandStore(
    useShallow((state) => [state.room_totalYList]),
  );

  return (
    <Droppable droppableId="0">
      {(provided) => (
        <div
          className={styles.container}
          ref={provided.innerRef} // ref for Droppable
          {...provided.droppableProps}
        >
          {totalYList[0].map((item, idx) => (
            <Draggable
              key={item.spotInfoId}
              draggableId={item.spotInfoId.toString()}
              index={idx}
            >
              {(provided) => (
                <div
                  className={styles.box}
                  ref={provided.innerRef} // ref for Draggable
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {item.spotInfoId}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder} {/* Placeholder for Droppable */}
        </div>
      )}
    </Droppable>
  );
};

export default DndBanner;
