import styles from '../../../../assets/calendar/Desktop/leftSide/dndCard.module.css';
import testImage from '../../../../../home/assets/testImg.png';
import addrImage from '../../../../assets/calendar/assets/addr.png';
import Chip from './Chip.tsx';
import deleteImage from '../../../../assets/calendar/assets/delete.png';
import Profile from './Profile.tsx';
import { Draggable } from '@hello-pangea/dnd';
import { totalYListInfo } from '../../../../../../store/room/RoomSliceState.ts';

interface Props {
  item: totalYListInfo;
  idx: number;
}

const DndCard = ({ item, idx }: Props) => {
  return (
    <Draggable draggableId={item.spotInfoId.toString()} index={idx}>
      {(provided) => (
        <section
          className={styles.draggableBox}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <img
            src={testImage}
            alt={'left Dnd Image'}
            className={styles.image}
          />
          <aside className={styles.description}>
            <div className={styles.desBox}>
              <p className={styles.title}>{item.title}</p>
              <div className={styles.addrBox}>
                <img
                  src={addrImage}
                  alt={'Addr Image'}
                  className={styles.addrImage}
                />
                <p className={styles.addr}>{item.addr}</p>
              </div>
              <Chip contentType={item.contentType} />
            </div>
            <div className={styles.right}>
              <img
                src={deleteImage}
                alt={'Delete Image'}
                className={styles.deleteImage}
              />
              <Profile image={testImage} order={item.order} />
            </div>
          </aside>
        </section>
      )}
    </Draggable>
  );
};

export default DndCard;
