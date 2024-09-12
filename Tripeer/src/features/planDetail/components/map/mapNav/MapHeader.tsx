import styles from '../../../assets/map/mapNav/placeMap.module.css';
import useIsMobileSize from '../../../hooks/useIsMobileSize';
import MapBasicHeader from './MapBasicHeader';
import MapKeywordHeader from './MapKeywordHeader';

export default function MapHeader() {
  const isMobileSize = useIsMobileSize();

  return (
    <>
      {isMobileSize && (
        <header className={styles.headerBox}>
          <MapBasicHeader />
          <MapKeywordHeader />
        </header>
      )}
    </>
  );
}
