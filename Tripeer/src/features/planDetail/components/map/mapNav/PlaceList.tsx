import styles from '../../../assets/map/mapNav/placeList.module.css';
import ListHeader from './ListHeader';

export default function PlaceList() {
  return (
    <div className={styles.container}>
      <ListHeader />
      이거 여행지 목록
    </div>
  );
}
