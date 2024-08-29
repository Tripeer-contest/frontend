import styles from '../modules/placeBox.module.css';
import like from '../assets/like.png';
import unLike from '../assets/unLike.png';
import usePlaceBox from '../hooks/usePlaceBox.tsx';
import { getRateImg } from '../../../utils/rating.ts';

interface Props {
  name: string;
  address: string;
  img: string;
}

const PlaceBox = ({ name, address, img }: Props) => {
  const { likeClickHandler, isLike, rating } = usePlaceBox();
  const star = getRateImg(rating);

  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img src={img} alt={'testImg'} className={styles.img} />
        <img
          src={isLike ? like : unLike}
          alt={'likeImg'}
          className={styles.like}
          onClick={likeClickHandler}
        />
      </div>
      <section className={styles.description}>
        <p className={styles.title}>{name}</p>
        <div className={styles.ratingBox}>
          <img src={star} alt={'ratingImg'} className={styles.rating} />
          <p className={styles.ratingScore}>({rating})</p>
        </div>
        <p className={styles.desP}>카테고리-숙박</p>
        <p className={styles.desP}>{address}</p>
      </section>
    </div>
  );
};

export default PlaceBox;
