import styles from '../../../assets/map/mapNav/placeMap.module.css';

import MapBasicHeader from './MapBasicHeader';
import MapKeywordHeader from './MapKeywordHeader';

export default function MapHeader() {
  return (
    <header className={styles.headerBox}>
      <MapBasicHeader />
      <MapKeywordHeader />
    </header>
  );
}
