import halfStar from '../assets/img/half_star.svg';
import styles from '../assets/starRating.module.css';

export default function StarRating({
  rating,
  setRating,
}: {
  rating: number;
  setRating: (param: number) => void;
}) {
  const handleClick = (index: number, isHalf: boolean) => {
    setRating(isHalf ? index + 0.5 : index + 1);
  };

  return (
    <div className={styles.starContainer}>
      {[...Array(5)].map((_, index) => (
        <div key={index} className={styles.starWrapper}>
          <div
            className={`${styles.halfStar} ${styles.leftHalf}`}
            onClick={() => handleClick(index, true)}
            style={{
              backgroundImage: `url(${halfStar})`,
              opacity: rating >= index + 0.5 ? 1 : 0.4,
            }}
          />
          <div
            className={`${styles.halfStar} ${styles.rightHalf}`}
            onClick={() => handleClick(index, false)}
            style={{
              backgroundImage: `url(${halfStar})`,
              opacity: rating >= index + 1 ? 1 : 0.4,
            }}
          />
        </div>
      ))}
      <p className={styles.ratingText}>( {rating} )</p>
    </div>
  );
}
