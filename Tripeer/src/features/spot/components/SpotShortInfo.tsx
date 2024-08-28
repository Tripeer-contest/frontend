import { Swiper, SwiperSlide } from 'swiper/react';
import { getRateImg } from '../../../utils/rating';
import styles from '../assets/shortInfo.module.css';

import 'swiper/css';
import { truncateText } from '../../../utils/utilString';

export default function SpotShortInfo() {
  return (
    <section className={styles.container}>
      <p className={styles.category}>카테고리 - 숙박</p>
      <h1 className={styles.spotTitle}>신라스테이 해운대</h1>
      <div className={styles.layoutBox}>
        <div className={styles.rateBox}>
          <img
            src={getRateImg(4.5)}
            alt="star-rating"
            className={styles.star}
          />
          <span className={styles.point}>4.5</span>
          <span> - 1200명 평가</span>
        </div>
        <a className={styles.scrollBtn}>전체보기</a>
      </div>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        style={{ width: '100%' }}
      >
        {[1, 2, 3, 4, 5].map((data) => {
          return (
            <SwiperSlide className={styles.ratingBox} key={data}>
              <div className={styles.nameBox}>
                <p>부수환</p>
                <p className={styles.date}>1일전</p>
              </div>
              <img
                src={getRateImg(4.5)}
                alt="rating"
                className={styles.starPer}
              />
              <p className={styles.reviewArea}>
                {truncateText(
                  'akjdvlkajsdlkv;ajsdlkvjas;ldkvja;lksdvja;sldkvjal;sdkvja;lsdjva;lskdjvaskdv',
                  50,
                )}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
