import { Fragment } from 'react/jsx-runtime';
import zustandStore from '../../../../../../store/store';
import styles from '../../../../assets/map/mapNav/placeListContent.module.css';
import PlaceListCard from './PlaceListCard';
export default function PlaceContent() {
  const spotList = zustandStore((state) => state.room_spotList);
  return (
    <div className={styles.container}>
      {spotList.map((spot) => (
        <Fragment key={spot.spotInfoId}>
          <PlaceListCard spotInfo={spot} />
        </Fragment>
      ))}
      {spotList.length === 0 && <div>여기에 추가할거 추천좀.</div>}
    </div>
  );
}
