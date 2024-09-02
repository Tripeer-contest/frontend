import { Swiper, SwiperSlide } from 'swiper/react';
import { getRateImg } from '../../../utils/rating';
import styles from '../assets/shortInfo.module.css';

import 'swiper/css';
import { truncateText } from '../../../utils/utilString';
import useSpotDetailQuery from '../hooks/useSpotDetailQuery';
import { useParams } from 'react-router-dom';
import { ReviewInterface } from '../../../types/PlaceType';

interface ShortQueryType {
  title: string;
  contentType: string;
  starPointAvg: number;
  reviewDtoList: ReviewInterface[];
  reviewTotalCount: number;
}

export default function SpotShortInfo({
  scrollToReview,
}: {
  scrollToReview: () => void;
}) {
  const params = useParams();
  const id = params.id ? +params.id : NaN;
  const { data } = useSpotDetailQuery<ShortQueryType>(id, (data) => ({
    title: data.data.title,
    contentType: data.data.contentType,
    reviewDtoList: data.data.reviewDtoList,
    starPointAvg: data.data.starPointAvg,
    reviewTotalCount: data.data.reviewTotalCount,
  }));
  return (
    <section className={styles.container}>
      <p className={styles.category}>카테고리 - {data.contentType}</p>
      <h1 className={styles.spotTitle}>{data.title}</h1>
      <div className={styles.layoutBox}>
        <div className={styles.rateBox}>
          <img
            src={getRateImg(data.starPointAvg)}
            alt="star-rating"
            className={styles.star}
          />
          <span className={styles.point}>{data.starPointAvg}</span>
          <span> - {data.reviewTotalCount}명 평가</span>
        </div>
        {data.reviewDtoList.length ? (
          <a className={styles.scrollBtn} onClick={scrollToReview}>
            전체보기
          </a>
        ) : (
          <a className={styles.scrollBtn} onClick={scrollToReview}>
            리뷰쓰기
          </a>
        )}
      </div>
      {data.reviewDtoList.length === 0 && (
        <p className={styles.emptyReview}>작성된 리뷰가 없습니다.</p>
      )}
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        style={{ width: '100%' }}
      >
        {data.reviewDtoList.length > 0 &&
          data.reviewDtoList.map((data) => {
            return (
              <SwiperSlide className={styles.ratingBox} key={data.spotReviewId}>
                <div className={styles.nameBox}>
                  <p>{data.nickname}</p>
                  <p className={styles.date}>1일전</p>
                </div>
                <img
                  src={getRateImg(data.starPoint)}
                  alt="rating"
                  className={styles.starPer}
                />
                <p className={styles.reviewArea}>
                  {truncateText(data.message, 50)}
                </p>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
}
