import styles from '../modules/mPlaceBox.module.css';
import testImg from '../assets/testImg.png';
import { getRateImg } from '../../../utils/rating.ts';

const MPlaceBox = () => {
  return (
    <div className={styles.container}>
      <img src={testImg} alt={'placeImg'} className={styles.image} />
      <section className={styles.description}>
        <p className={styles.title}>신라스테이 해운대</p>
        <div className={styles.ratingBox}>
          <img src={getRateImg(4.5)} alt={'ratingImage'} />
          <p>(4.5)</p>
        </div>
        <p>카테고리 - 숙박</p>
        <p>부산 해운대구 해운대로 570번길 46</p>
      </section>
    </div>
  );
};

export default MPlaceBox;
