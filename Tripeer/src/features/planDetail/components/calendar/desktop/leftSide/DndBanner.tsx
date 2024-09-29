import styles from '../../../../assets/calendar/Desktop/leftSide/dndBanner.module.css';
import { Droppable } from '@hello-pangea/dnd';
import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../../../store/store.tsx';
import DndCard from './DndCard.tsx';
import Nodata from './Nodata.tsx';

const DndBanner = () => {
  const [totalYList, searchList] = zustandStore(
    useShallow((state) => [state.room_totalYList, state.c_searchList]),
  );

  const displayArr = totalYList[0].filter((item) =>
    searchList.includes(item.spotInfoId),
  );

  return (
    <Droppable droppableId="0">
      {(provided) => (
        <div
          className={styles.container}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {displayArr.length !== 0 ? (
            totalYList[0].length !== 0 ? (
              totalYList[0]?.map((item, idx) => (
                <DndCard item={item} idx={idx} key={item.spotInfoId} />
              ))
            ) : (
              <Nodata />
            )
          ) : (
            <Nodata />
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DndBanner;
