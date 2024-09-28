import { Draggable } from '@hello-pangea/dnd';
import styles from '../../../../assets/calendar/Desktop/rightSide/dndCard.module.css';
import dotImage from '../../../../assets/calendar/assets/dot.png';
import { totalYListInfo } from '../../../../../../store/room/RoomSliceState.ts';
import { userColors } from '../../../../../../data/userColors.ts';
import TimeCard from './TimeCard.tsx';
import useMCard from '../../hooks/useMCard.tsx';
import addrImage from '../../../../assets/calendar/assets/addr.png';
import Chip from '../leftSide/Chip.tsx';
import addImage from '../../../../assets/calendar/assets/add2.png';
import deleteImage from '../../../../assets/calendar/assets/deletePlace.png';
import zustandStore from '../../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';
import React from 'react';
import MutationLoading from '../../../../../../components/loading/MutationLoading.tsx';

interface Props {
  item: totalYListInfo;
  itemIdx: number;
  length: number;
  idx: number;
}

const DndCard = ({ item, itemIdx, length, idx }: Props) => {
  const {
    onClickHandler,
    close,
    PlanModal,
    backHandler,
    addHandler,
    deleteHandler,
    isLoading,
  } = useMCard(item, itemIdx);
  const [totalYList, nowDay, blockYList] = zustandStore(
    useShallow((state) => [
      state.room_totalYList,
      state.c_nowDay,
      state.room_blockYList,
    ]),
  );

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
            <div className={styles.draggableBox} onClick={onClickHandler}>
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
              <TimeCard
                isDragging={snapshot.isDragging}
                idx={idx}
                itemIdx={itemIdx}
              />
            )}
          </div>
        )}
      </Draggable>

      <PlanModal
        onClose={close}
        className={styles.modalContainer}
        onClick={() => backHandler(close)}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <section className={styles.modalCard}>
            <img
              src={item.img}
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
            </aside>
          </section>

          <section className={styles.selectBox}>
            {totalYList.map((_, index) => {
              if (index > 0 && index !== nowDay + 1 && !blockYList[index])
                return (
                  <React.Fragment key={index}>
                    <div className={styles.modalLine} />
                    <div
                      className={styles.modalPlaceBox}
                      onClick={() => addHandler(close, index)}
                    >
                      <img
                        src={addImage}
                        alt={'Add Image'}
                        className={styles.addImage}
                      />
                      <p>{index}일차로 이동하기</p>
                    </div>
                  </React.Fragment>
                );
            })}

            <div className={styles.modalLine} />
            <div
              className={styles.modalPlaceBox}
              onClick={() => deleteHandler(close)}
            >
              <img
                src={deleteImage}
                alt={'Delete Image'}
                className={styles.deleteImage}
              />
              <p>해당 일차에서 제거하기</p>
            </div>
          </section>
        </div>
      </PlanModal>
      <MutationLoading isShow={isLoading} />
    </>
  );
};

export default DndCard;
