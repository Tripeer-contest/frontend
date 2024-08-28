import { getRateImg } from '../../../utils/rating';
import SpotLine from './SpotLine';
import styles from '../assets/review.module.css';

export default function SpotReview() {
  return (
    <section className={styles.container}>
      <aside className={styles.container}>
        <h3 className={styles.title}>리뷰 보기</h3>
        <div className={styles.rateBox}>
          <div className={styles.rateContent}>
            <img
              src={getRateImg(4.5)}
              alt="rating-img"
              className={styles.star}
            />
            <p className={styles.rate}>4.5</p>
            <p> - 1200명 평가</p>
          </div>
          <p className={styles.rateBtn}>리뷰 작성</p>
        </div>
      </aside>
      <SpotLine />
      <article>
        <div className={styles.reviewBox}></div>
        <SpotLine />
      </article>
    </section>
  );
}
