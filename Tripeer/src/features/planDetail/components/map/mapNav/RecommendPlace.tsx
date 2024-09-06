import styles from '../../../assets/map/mapNav/recommend.module.css';
import PlaceList from './PlaceList';
import btnImg from '../../../assets/map/mapNav/assets/openListBtn.svg';
import RecommendHeader from '../recommend/RecommendHeader';
import { useState } from 'react';
import RecommendContent from '../recommend/RecommendContent';

export default function RecommendPlace() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className={styles.container}>
        <RecommendHeader />
        <RecommendContent />
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
