import zustandStore from '../../../../../store/store';
import styles from '../../../assets/map/mapNav/placeMap.module.css';
import cancel_icon from '../../../../../assets/button/cancel_gray.svg';
import { useShallow } from 'zustand/react/shallow';
import { truncateText } from '../../../../../utils/utilString';

export default function MapKeywordHeader() {
  const [sortType, setSortType, keyword, setKeyword, spotInfo, setSpotInfo] =
    zustandStore(
      useShallow((state) => [
        state.room_sortType,
        state.room_setSortType,
        state.room_mapSearchKeyword,
        state.room_setMapSearchKeyword,
        state.room_spotInfo,
        state.room_setSpotInfo,
      ]),
    );

  const cancelSort = () => setSortType('');
  const cancelKeyword = () => setKeyword('');

  return (
    <>
      {sortType && !spotInfo && (
        <div className={styles.keywordBox}>
          {sortType}
          <img
            src={cancel_icon}
            alt="cancel-icon"
            className={styles.cancel}
            onClick={cancelSort}
          />
        </div>
      )}
      {keyword && !spotInfo && (
        <div className={styles.keywordBox}>
          {truncateText(keyword, 8)}
          <img
            src={cancel_icon}
            alt="cancel-icon"
            className={styles.cancel}
            onClick={cancelKeyword}
          />
        </div>
      )}
      {spotInfo && (
        <div className={styles.spotBox}>
          <div className={styles.spotIconBox} onClick={() => setSpotInfo(null)}>
            <img
              src={cancel_icon}
              className={styles.cancelIcon}
              alt="cancel-icon"
            />
          </div>
        </div>
      )}
    </>
  );
}
