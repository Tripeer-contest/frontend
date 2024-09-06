import zustandStore from '../../../../../store/store';
import styles from '../../../assets/map/mapNav/placeMap.module.css';
import cancel_icon from '../../../../../assets/button/cancel_gray.svg';
import { useShallow } from 'zustand/react/shallow';

export default function MapKeywordHeader() {
  const [keyword, setKeyword] = zustandStore(
    useShallow((state) => [
      state.room_mapSearchKeyword,
      state.room_setMapSearchKeyword,
    ]),
  );

  const cancel = () => setKeyword('');

  return (
    <>
      {keyword && (
        <div className={styles.keywordBox}>
          {keyword}
          <img
            src={cancel_icon}
            alt="cancel-icon"
            className={styles.cancel}
            onClick={cancel}
          />
        </div>
      )}
    </>
  );
}
