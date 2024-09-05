// import { useMemo } from 'react';
import useMap from '../../../../../hooks/useMap';
import styles from '../../../assets/map/mapNav/placeMap.module.css';
import MapHeader from './MapHeader';

export default function PlaceMap() {
  const { setMapRef } = useMap();
  return (
    <div className={styles.container} ref={setMapRef}>
      <MapHeader />
    </div>
  );
}
