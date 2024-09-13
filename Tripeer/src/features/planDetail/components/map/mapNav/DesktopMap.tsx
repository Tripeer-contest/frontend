import styles from '../../../assets/map/map.module.css';
import DesktopSearch from './DesktopSearch';
import PlaceMap from './PlaceMap';

export default function DesktopMap() {
  return (
    <div className={styles.noMobile}>
      <DesktopSearch />
      <PlaceMap />
    </div>
  );
}
