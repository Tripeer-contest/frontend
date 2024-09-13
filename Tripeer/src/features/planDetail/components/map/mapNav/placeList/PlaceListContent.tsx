import styles from '../../../../assets/map/mapNav/placeListContent.module.css';
import PlaceListCard from './PlaceListCard';
export default function PlaceContent() {
  return (
    <div className={styles.container}>
      <PlaceListCard />
    </div>
  );
}
