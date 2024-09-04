import styles from '../../../assets/map/mapNav/searchPlace.module.css';
import PlaceList from './PlaceList';
import btnImg from '../../../assets/map/mapNav/assets/openListBtn.svg';
import SearchHeader from './SearchHeader';

export default function SearchPlace({
  isVisible,
  openPlaceList,
}: {
  isVisible: boolean;
  openPlaceList: () => void;
}) {
  return (
    <>
      <div className={styles.container}>
        <SearchHeader />
        여행지 검색
        <img
          src={btnImg}
          className={isVisible ? styles.closeBtn : styles.openBtn}
          onClick={openPlaceList}
        ></img>
      </div>
      {isVisible && <PlaceList />}
    </>
  );
}
