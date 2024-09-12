import styles from '../../../assets/map/mapNav/searchPlace.module.css';
import btnImg from '../../../assets/map/mapNav/assets/openListBtn.svg';
import SearchHeader from '../search/searchHeader';
import { useState } from 'react';
import PlaceList from './PlaceList';
import SearchTopContent from '../search/SearchTopContent';

export default function DesktopSearch() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <SearchHeader />
        <img
          src={btnImg}
          className={isVisible ? styles.closeBtn : styles.openBtn}
          onClick={() => setIsVisible((prev) => !prev)}
        ></img>
        <SearchTopContent />
      </div>
      {isVisible && <PlaceList />}
    </>
  );
}
