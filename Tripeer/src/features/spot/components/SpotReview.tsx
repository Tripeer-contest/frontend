import { getRateImg } from '../../../utils/rating';
import SpotLine from './SpotLine';
import styles from '../assets/review.module.css';
import { forwardRef } from 'react';
import SpotReviewDetail from './SpotReviewDetail';
import ReviewPage from './ReviewPage';

export const SpotReview = forwardRef<
  HTMLDivElement | null,
  { scrollToReview: (() => void) | null }
>(function SpotReview({ scrollToReview }, ref) {
  return (
    <>
      <div className={styles.headerBox} ref={ref}>
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
      </div>
      <SpotReviewDetail />
      <SpotReviewDetail />
      <SpotReviewDetail />
      <SpotReviewDetail />
      <SpotReviewDetail />
      <ReviewPage scrollTop={scrollToReview} />
    </>
  );
});
