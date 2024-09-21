import { getRateImg } from '../../../utils/rating';
import SpotLine from './SpotLine';
import styles from '../assets/review.module.css';
import { forwardRef, useEffect, useState } from 'react';
import SpotReviewDetail from './SpotReviewDetail';
import ReviewPage from './ReviewPage';
import useSpotDetailQuery, {
  useReviewDetailQuery,
} from '../hooks/useSpotDetailQuery';
import SmallLoading from '../../../components/loading/SmallLoading';
import { useNavigate } from 'react-router-dom';

interface ReviewInterface {
  starPointAvg: number;
  reviewPageCount: number;
  reviewTotalCount: number;
}

export const SpotReview = forwardRef<
  HTMLDivElement | null,
  { scrollToReview: (() => void) | null; id: number; mode: boolean }
>(function SpotReview({ scrollToReview, id, mode }, ref) {
  const [page, setPage] = useState(0);
  const { data } = useSpotDetailQuery<ReviewInterface>(id, (data) => ({
    reviewPageCount: data.data.reviewPageCount,
    reviewTotalCount: data.data.reviewTotalCount,
    starPointAvg: data.data.starPointAvg,
  }));
  const review = useReviewDetailQuery(id, page);

  useEffect(() => {
    if (data.reviewPageCount) setPage(1);
  }, [data]);
  const navigate = useNavigate();
  const OpenCreateReview = () => {
    navigate(`./createReview`);
  };
  return (
    <>
      <div className={styles.headerBox} ref={ref}>
        <aside className={styles.container}>
          <h3 className={styles.title}>리뷰 보기</h3>
          <div className={styles.rateBox}>
            <div className={styles.rateContent}>
              <img
                src={getRateImg(data.starPointAvg)}
                alt="rating-img"
                className={styles.star}
              />
              <p className={styles.rate}>{data.starPointAvg}</p>
              <p> - {data.reviewTotalCount}명 평가</p>
            </div>
            {mode && (
              <p
                className={styles.rateBtn}
                onClick={() => {
                  OpenCreateReview();
                }}
              >
                리뷰 작성
              </p>
            )}
          </div>
        </aside>
        <SpotLine />
      </div>
      {review.data && (
        <>
          {review.data.data.map((review, idx) => (
            <SpotReviewDetail key={idx} review={review} />
          ))}
        </>
      )}
      {!review.isLoading && review.data?.data.length === 0 && (
        <>
          <p className={styles.noreview}>아직 작성된 리뷰가 없습니다.</p>
          <SpotLine />
        </>
      )}
      {review.isLoading && <SmallLoading />}
      <ReviewPage
        scrollTop={scrollToReview}
        setPage={setPage}
        maxPage={data.reviewPageCount}
        page={page}
      />
    </>
  );
});
