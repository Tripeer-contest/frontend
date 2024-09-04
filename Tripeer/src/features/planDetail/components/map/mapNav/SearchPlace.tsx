import styles from '../../../assets/map/mapNav/searchPlace.module.css';
import PlaceList from './PlaceList';

export default function SearchPlace({
  isVisible,
  openPlaceList,
}: {
  isVisible: any;
  openPlaceList: any;
}) {
  return (
    <>
      <div className={styles.container}>
        여행지 검색
        <button
          className={styles.openBtn}
          onClick={() => {
            openPlaceList();
          }}
        >
          클릭
        </button>
      </div>
      {isVisible && <PlaceList />}
    </>
  );
}
