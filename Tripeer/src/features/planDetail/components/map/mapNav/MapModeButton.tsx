import styles from '../../../assets/map/mapNav/placeMap.module.css';
import refresh_icon from '../../../../../assets/button/refresh.svg';
import zustandStore from '../../../../../store/store';
import { useShallow } from 'zustand/react/shallow';
import { useEffect, useState } from 'react';

export default function MapModeButton() {
  const [sortType, minLat, maxLat, minLon, maxLon, setBound, bound] =
    zustandStore(
      useShallow((state) => [
        state.room_sortType,
        state.room_minLat,
        state.room_maxLat,
        state.room_minLon,
        state.room_maxLon,
        state.room_setModeBound,
        state.room_modeBound,
      ]),
    );
  const [refresh, setRefresh] = useState(false);

  const sortNum: { [param: string]: number } = {
    전체: 1,
    명소: 2,
    숙박: 3,
    맛집: 4,
  };

  const boundChange = () => {
    setBound({ minLat, maxLat, minLon, maxLon });
  };
  useEffect(() => {
    if (
      bound &&
      (bound.minLat !== minLat ||
        bound.maxLat !== maxLat ||
        bound.minLon !== minLon ||
        bound.maxLon !== maxLon)
    ) {
      setRefresh(true);
    } else {
      bound ? setRefresh(false) : setRefresh(true);
    }
  }, [minLat, maxLat, minLon, maxLon, bound]);
  return (
    <>
      {sortNum[sortType] && refresh && (
        <div
          className={styles.refreshBtn}
          onClick={() => {
            boundChange();
          }}
        >
          <img src={refresh_icon} alt="refresh-btn" />현 위치에서 검색
        </div>
      )}
      {sortNum[sortType] && !refresh && (
        <div
          className={styles.refreshBtn}
          onClick={() => {
            setBound(null);
          }}
        >
          <img src={refresh_icon} alt="refresh-btn" />
          전체 검색
        </div>
      )}
    </>
  );
}
