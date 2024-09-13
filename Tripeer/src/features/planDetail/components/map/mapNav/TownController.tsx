import { MouseEvent } from 'react';
import useModal from '../../../../../hooks/useModal';
import styles from '../../../assets/map/mapNav/recommend.module.css';
import zustandStore from '../../../../../store/store';
import { useShallow } from 'zustand/react/shallow';
import selectTownIcon from '../../../../../assets/button/selectItemIcon.svg';
import closeIcon from '../../../../../assets/button/cancel_gray.svg';

export default function TownController() {
  const [townInfo, townIdx, setTownIdx] = zustandStore(
    useShallow((state) => [
      state.room_townList,
      state.room_selectedTownIdx,
      state.room_setSelectedTownIdx,
    ]),
  );

  const { ModalLayout, close, open } = useModal();
  const closeHandler = (e: MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) close();
  };
  const clickHandler = (idx: number) => {
    setTownIdx(idx);
    close();
  };
  return (
    <div className={styles.selectTownBox}>
      <p className={styles.title} onClick={open}>
        {townInfo[townIdx].title}
      </p>
      <img
        src={selectTownIcon}
        className={styles.selectTownIcon}
        alt="select-town-icon"
        onClick={open}
      />
      <ModalLayout onClick={closeHandler} className={styles.modalContainer}>
        <div>
          <div className={styles.descriptionText}>
            <div className={styles.emptyBox}></div>
            <p>여행 지역 선택</p>
            <img
              src={closeIcon}
              className={styles.closeIcon}
              alt="close-icon"
              onClick={() => close()}
            />
          </div>
          <div className={styles.itemBox}>
            {townInfo.map((item, idx) => {
              return (
                <p
                  className={styles.itemText}
                  onClick={() => clickHandler(idx)}
                  key={`${item.cityId}-${item.townId}`}
                >
                  {item.title}
                </p>
              );
            })}
          </div>
        </div>
      </ModalLayout>
    </div>
  );
}
