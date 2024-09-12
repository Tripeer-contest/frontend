import styles from '../../../assets/map/mapNav/placeList.module.css';
import ListHeader from './ListHeader';
import PlaceContent from './placeList/PlaceListContent';

export default function PlaceList() {
  return (
    <div className={styles.container}>
      <ListHeader />
      <PlaceContent />
    </div>
  );
}
