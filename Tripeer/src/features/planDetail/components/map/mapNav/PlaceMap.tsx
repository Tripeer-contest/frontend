import { useMemo } from 'react';
import useMap from '../../../../../hooks/useMap';
import zustandStore from '../../../../../store/store';
import styles from '../../../assets/map/mapNav/placeMap.module.css';
import MapHeader from './MapHeader';
import MapSearchResult from './MapSearchResult';
import { useShallow } from 'zustand/react/shallow';
import { LimitLevel } from '../../../../../types/kakaoTypes';
import useMapUtil from '../../../hooks/useMapUtil';

export default function PlaceMap() {
  const [townInfo, townIdx] = zustandStore(
    useShallow((state) => [state.room_townList, state.room_selectedTownIdx]),
  );
  const mapOptions = useMemo(() => {
    return {
      center: {
        latitude: townInfo[townIdx].latitude,
        longitude: townInfo[townIdx].longitude,
      },
      level: 5 as LimitLevel,
    };
  }, [townInfo, townIdx]);
  const { setMapRef, map } = useMap(mapOptions);
  useMapUtil(map);
  return (
    <>
      <div className={styles.container} ref={setMapRef}>
        <MapHeader />
      </div>
      <MapSearchResult />
    </>
  );
}
