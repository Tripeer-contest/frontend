import { Swiper, SwiperSlide } from 'swiper/react';
import { getRateImg } from '../../../utils/rating';
import styles from '../assets/shortInfo.module.css';

import 'swiper/css';
import { truncateText } from '../../../utils/utilString';
import useSpotDetailQuery from '../hooks/useSpotDetailQuery';
import { ReviewInterface } from '../../../types/PlaceType';
import { daysAgo } from '../../../utils/utilDate';
import { useNavigate } from 'react-router-dom';

interface ShortQueryType {
  title: string;
  contentType: string;
  starPointAvg: number;
  reviewDtoList: ReviewInterface[];
  reviewTotalCount: number;
}

export default function SpotShortInfo({
  scrollToReview,
  id,
  mode,
}: {
  scrollToReview: () => void;
  id: number;
  mode: boolean;
}) {
  const { data } = useSpotDetailQuery<ShortQueryType>(id, (data) => ({
    title: data.data.title,
    contentType: data.data.contentType,
    reviewDtoList: data.data.reviewDtoList,
    starPointAvg: data.data.starPointAvg,
    reviewTotalCount: data.data.reviewTotalCount,
  }));
  const navigate = useNavigate();
  const OpenCreateReview = () => {
    navigate(`./createReview`);
  };
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
        {mode && (
          <>
            {data.reviewDtoList.length ? (
              <a className={styles.scrollBtn} onClick={scrollToReview}>
                전체보기
              </a>
            ) : (
              <a
                className={styles.scrollBtn}
                onClick={() => {
                  OpenCreateReview();
                }}
              >
                리뷰쓰기
              </a>
            )}
          </>
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
                  <p className={styles.date}>{daysAgo(data.createTime)}</p>
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
