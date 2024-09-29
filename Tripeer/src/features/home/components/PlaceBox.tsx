import styles from '../modules/placeBox.module.css';
import like from '../assets/like.png';
import unLike from '../assets/unLike.png';
import { getRateImg } from '../../../utils/rating.ts';
import { PlaceType } from '../../../types/PlaceType.ts';
import { MouseEvent } from 'react';
import { handleErrorImg } from '../../../data/defaultImg.ts';

interface Props {
  place: PlaceType;
  clickHandler: () => void;
  likeClickHandler: (
    e: MouseEvent<HTMLImageElement>,
    spotId: number,
    like: boolean,
  ) => void;
  rating: number;
}
const PlaceBox = ({ place, clickHandler, likeClickHandler, rating }: Props) => {
  const star = getRateImg(place.starPointAvg);

  return (
    <div className={styles.container} onClick={clickHandler}>
      <div className={styles.imgBox}>
        <img
          src={place.spotImg}
          alt={'placeImg'}
          className={styles.img}
          loading="lazy"
          onError={handleErrorImg}
        />
        <img
          src={place.wishlist ? like : unLike}
          alt={`${rating}`}
          className={styles.like}
          onClick={(e) => likeClickHandler(e, place.spotId, place.wishlist)}
        />
      </div>
      <section className={styles.description}>
        <p className={styles.title}>{place.spotName}</p>
        <p className={styles.desP}>카테고리 - {place.contentType}</p>
        <div className={styles.ratingBox}>
          <img src={star} alt={'ratingImg'} className={styles.rating} />
          <p className={styles.ratingScore}>({place.starPointAvg})</p>
        </div>
        <p className={styles.desP}>{place.address}</p>
      </section>
    </div>
  );
};

export default PlaceBox;
