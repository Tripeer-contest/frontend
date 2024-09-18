import { Draggable } from '@hello-pangea/dnd';
import styles from '../../../../assets/calendar/Desktop/rightSide/dndCard.module.css';
import dotImage from '../../../../assets/calendar/assets/dot.png';
import { totalYListInfo } from '../../../../../../store/room/RoomSliceState.ts';
import { userColors } from '../../../../../../data/userColors.ts';
import TimeCard from './TimeCard.tsx';

interface Props {
  item: totalYListInfo;
  itemIdx: number;
  length: number;
}

const DndCard = ({ item, itemIdx, length }: Props) => {
  return (
    <>
      <Draggable
        key={item.spotInfoId}
        draggableId={item.spotInfoId.toString()}
        index={itemIdx}
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className={styles.draggableBox}>
              <div className={styles.left}>
                <div
                  className={styles.numberBox}
                  style={{
                    backgroundColor: `${userColors[item.order]}`,
                  }}
                >
                  {itemIdx + 1}
                </div>
                <p className={styles.name}>{item.title}</p>
              </div>
              <div className={styles.right}>
                <p
                  className={styles.contentType}
                  style={{ color: `${userColors[item.order]}` }}
                >
                  {item.contentType}
                </p>
                <img
                  src={dotImage}
                  alt={'Dot Image'}
                  className={styles.dotImage}
                />
              </div>
            </div>
            {itemIdx < length - 1 && (
              <TimeCard isDragging={snapshot.isDragging} />
            )}
          </div>
        )}
      </Draggable>
    </>
  );
};

export default DndCard;
