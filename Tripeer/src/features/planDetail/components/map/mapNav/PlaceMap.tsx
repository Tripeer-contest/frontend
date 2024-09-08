import { useEffect } from 'react';
import useMap from '../../../../../hooks/useMap';
import zustandStore from '../../../../../store/store';
import styles from '../../../assets/map/mapNav/placeMap.module.css';
import MapHeader from './MapHeader';
import MapSearchResult from './MapSearchResult';

export default function PlaceMap() {
  const setStoreMap = zustandStore((state) => state.room_setMap);
  const { setMapRef, map } = useMap();
  useEffect(() => {
    if (map) setStoreMap(map);
    return () => setStoreMap(null);
  }, [setStoreMap, map]);

  return (
    <>
      <div className={styles.container} ref={setMapRef}>
        <MapHeader />
      </div>
      <MapSearchResult />
    </>
  );
}
