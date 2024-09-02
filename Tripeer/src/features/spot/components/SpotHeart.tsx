import { useParams } from 'react-router-dom';
import useSpotDetailQuery from '../hooks/useSpotDetailQuery';

import styles from '../assets/header.module.css';
import fullHeart from '../../../assets/button/full_heart.svg';
import heart from '../../../assets/button/heart.svg';

export default function SpotHeart() {
  const params = useParams();
  const id = params.id ? +params.id : NaN;
  const { data } = useSpotDetailQuery<boolean>(id, (data) => data.data.like);
  return (
    <>
      {data ? (
        <img src={fullHeart} alt="heart-btn" className={styles.heart} />
      ) : (
        <img src={heart} alt="heart-btn" className={styles.heart} />
      )}
    </>
  );
}
