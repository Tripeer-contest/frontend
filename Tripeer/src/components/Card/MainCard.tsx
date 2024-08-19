import { MainItem } from '../../types/ItemTypes';
import { getRateImg } from '../../utils/rating';
import fullHeart from '../../assets/button/full_heart.svg';
import heart from '../../assets/button/heart.svg';
import styles from './assets/maincard.module.css';

export default function MainCard({
  userInfo,
  itemInfo,
  itemClickHandler,
  heartClickHandler,
}: MainItem) {
  const heartSrc = userInfo.isLike ? fullHeart : heart;
  return (
    <div onClick={itemClickHandler} className={styles.container}>
      <div className={styles.imgBox}>
        <img src={itemInfo.img} alt="item-img" className={styles.img} />
        <img
          src={heartSrc}
          alt="heart"
          className={styles.heart}
          onClick={heartClickHandler}
        />
      </div>
      <div className={styles.itemInfo}>
        <h3 className={styles.title}>{itemInfo.itemName}</h3>
        <p
          className={styles.category}
        >{`카테고리 - ${itemInfo.categoryName}`}</p>
        <div className={styles.rating}>
          <img
            src={getRateImg(itemInfo.rating)}
            alt=""
            className={styles.stars}
          />
          <span>{`(${itemInfo.rating})`}</span>
        </div>
        <div className={styles.location}>{itemInfo.location}</div>
      </div>
    </div>
  );
}
