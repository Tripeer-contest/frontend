import styles from '../../../assets/calendar/Mobile/card.module.css';
import deleteImage from '../../../assets/calendar/assets/deletePlace.png';
import addImage from '../../../assets/calendar/assets/add.png';
import { totalYListInfo } from '../../../../../store/room/RoomSliceState.ts';
import addrImage from '../../../assets/calendar/assets/addr.png';
import useDndCard from '../hooks/useDndCard.tsx';
import Chip from '../desktop/leftSide/Chip.tsx';
import Profile from '../desktop/leftSide/Profile.tsx';
import zustandStore from '../../../../../store/store.tsx';
import useCard from '../hooks/useCard.tsx';
import { handleErrorImg } from '../../../../../data/defaultImg.ts';

interface Props {
  item: totalYListInfo;
  idx: number;
}

const Card = ({ item, idx }: Props) => {
  const searchList = zustandStore((state) => state.c_searchList);
  const { onDelete } = useDndCard(item);
  const { onClickHandler, close, PlanModal, onClickBackground, addPlace } =
    useCard(item, idx);

  return (
    <main
      className={`${styles.container} ${!searchList.includes(item.spotInfoId) && styles.none}`}
      onClick={onClickHandler}
    >
      <img
        src={item.img}
        alt={'left Dnd Image'}
        className={styles.image}
        onError={handleErrorImg}
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
          <Profile image={item.profileImage} order={item.order} />
        </div>
      </aside>

      <PlanModal
        onClose={close}
        className={styles.modalContainer}
        onClick={() => onClickBackground(close)}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <section className={styles.modalCard}>
            <img
              src={item.img}
              alt={'left Dnd Image'}
              className={styles.image}
              onError={handleErrorImg}
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

          <div className={styles.modalLine} />
          <div className={styles.modalPlaceBox} onClick={() => addPlace(close)}>
            <img src={addImage} alt={'Add Image'} className={styles.addImage} />
            <p>해당 일차에 추가하기</p>
          </div>
          <div className={styles.modalLine} />
          <div
            className={styles.modalPlaceBox}
            onClick={(e) => {
              onDelete(e);
              close();
            }}
          >
            <img
              src={deleteImage}
              alt={'Delete Image'}
              className={styles.deleteImage}
            />
            <p>여행지 목록에서 제거하기</p>
          </div>
        </div>
      </PlanModal>
    </main>
  );
};

export default Card;
