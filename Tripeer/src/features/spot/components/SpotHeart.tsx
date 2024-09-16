import useSpotDetailQuery, {
  useHeartDetailMutation,
} from '../hooks/useSpotDetailQuery';

import styles from '../assets/header.module.css';
import fullHeart from '../../../assets/button/full_heart.svg';
import heart from '../../../assets/button/heart.svg';

export default function SpotHeart({ id }: { id: number }) {
  const { data } = useSpotDetailQuery<boolean>(id, (data) => data.data.like);
  const mutation = useHeartDetailMutation();
  const clickLike = () => {
    mutation.mutate({ spotId: id, isLike: data });
  };
  return (
    <>
      {data ? (
        <img
          src={fullHeart}
          alt="heart-btn"
          className={styles.heart}
          onClick={clickLike}
        />
      ) : (
        <img
          src={heart}
          alt="heart-btn"
          className={styles.heart}
          onClick={clickLike}
        />
      )}
    </>
  );
}
