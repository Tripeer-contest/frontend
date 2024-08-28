import styles from '../modules/mPlaceBox.module.css';
import testImg from '../assets/testImg.png';
import like from '../assets/like.png';
import unLike from '../assets/unLike.png';
import { getRateImg } from '../../../utils/rating.ts';
import usePlaceBox from '../hooks/usePlaceBox.tsx';

const MPlaceBox = () => {
  const { likeClickHandler, isLike, rating } = usePlaceBox();
  const star = getRateImg(rating);

  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img src={testImg} alt={'placeImg'} className={styles.image} />
        <img
          src={isLike ? like : unLike}
          alt={'likeImg'}
          className={styles.like}
          onClick={likeClickHandler}
        />
      </div>
      <section className={styles.description}>
        <p className={styles.title}>신라스테이 해운대</p>
        <div className={styles.ratingBox}>
          <img src={star} alt={'ratingImage'} className={styles.ratingImg} />
          <p className={styles.ratingP}>(4.5)</p>
        </div>
        <p className={styles.desP}>카테고리 - 숙박</p>
        <p className={styles.desP}>부산 해운대구 해운대로 570번길 46</p>
      </section>
    </div>
  );
};

export default MPlaceBox;
