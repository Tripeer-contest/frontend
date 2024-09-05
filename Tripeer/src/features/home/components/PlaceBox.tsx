import styles from '../modules/placeBox.module.css';
import like from '../assets/like.png';
import unLike from '../assets/unLike.png';
import usePlaceBox from '../hooks/usePlaceBox.tsx';
import { getRateImg } from '../../../utils/rating.ts';
import { PlaceType } from '../../../types/PlaceType.ts';

interface Props {
  place: PlaceType;
}

const PlaceBox = ({ place }: Props) => {
  const { clickHandler, likeClickHandler, rating } = usePlaceBox(
    place.wishlist,
    place.spotId,
  );
  const star = getRateImg(rating);

  return (
    <div className={styles.container} onClick={clickHandler}>
      <div className={styles.imgBox}>
        <img src={place.spotImg} alt={'placeImg'} className={styles.img} />
        <img
          src={place.wishlist ? like : unLike}
          alt={'likeImg'}
          className={styles.like}
          onClick={(e) => likeClickHandler(e)}
        />
      </div>
      <section className={styles.description}>
        <p className={styles.title}>{place.spotName}</p>
        <div className={styles.ratingBox}>
          <img src={star} alt={'ratingImg'} className={styles.rating} />
          <p className={styles.ratingScore}>({rating})</p>
        </div>
        <p className={styles.desP}>카테고리-숙박</p>
        <p className={styles.desP}>{place.address}</p>
      </section>
    </div>
  );
};

export default PlaceBox;
