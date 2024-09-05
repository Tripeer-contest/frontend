import styles from '../../../assets/map/map.module.css';
import SearchPlace from './SearchPlace';
import PlaceMap from './PlaceMap';

export default function DesktopMap() {
  return (
    <div className={styles.noMobile}>
      <SearchPlace />
      <PlaceMap />
    </div>
  );
}
