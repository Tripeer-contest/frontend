import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../assets/posting.module.css';

import 'swiper/css';
import { truncateText } from '../../../utils/utilString';

export default function SpotPosting() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>관련 블로그 포스팅</h3>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        style={{ width: '100%' }}
        nested={true}
      >
        {[1, 2, 3, 4, 5, 6].map((data) => {
          return (
            <SwiperSlide className={styles.cardPosting} key={data}>
              <img
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/quick-actions/remove-background-before-qa1.png"
                alt="blog-img"
                className={styles.img}
              />
              <div className={styles.contentInfo}>
                <p className={styles.infoTitle}>블로그 제목</p>
                <p className={styles.infoContent}>
                  {truncateText(
                    '블로그 내요암어피ㅏㅁㄴ어피;마ㅓㅇㅍ;ㅣㅏㅁ으ㅓㅍ;ㅏ멍ㄴ파',
                    30,
                  )}
                </p>
              </div>
              <span className={styles.dayInfo}>3091.05.12</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
