import styles from '../../../assets/map/mapNav/searchPlace.module.css';
import PlaceList from './PlaceList';
import btnImg from '../../../assets/map/mapNav/assets/openListBtn.svg';
import SearchHeader from './SearchHeader';
import { useState } from 'react';

export default function SearchPlace() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <SearchHeader />
        여행지 검색
        <img
          src={btnImg}
          className={isVisible ? styles.closeBtn : styles.openBtn}
          onClick={() => setIsVisible((prev) => !prev)}
        ></img>
      </div>
      {isVisible && <PlaceList />}
    </>
  );
}
