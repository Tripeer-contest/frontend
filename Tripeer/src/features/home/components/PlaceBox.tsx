import styles from '../modules/placeBox.module.css';
import testImg from '../assets/testImg.png';
import like from '../assets/like.png';
import unLike from '../assets/unLike.png';
import usePlaceBox from '../hooks/usePlaceBox.tsx';

const PlaceBox = () => {
  const { likeClickHandler, isLike } = usePlaceBox();

  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img src={testImg} alt={'testImg'} className={styles.img} />
        <img
          src={isLike ? like : unLike}
          alt={'likeImg'}
          className={styles.like}
          onClick={likeClickHandler}
        />
      </div>
      <section className={styles.description}>
        <p>신라스테이 해운대</p>
      </section>
    </div>
  );
};

export default PlaceBox;
