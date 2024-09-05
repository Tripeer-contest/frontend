import styles from '../../../assets/map/map.module.css';
import RecommendPlace from './RecommendPlace';
import PlaceMap from './PlaceMap';

export default function DesktopMap() {
  return (
    <div className={styles.noMobile}>
      <RecommendPlace />
      <PlaceMap />
    </div>
  );
}
