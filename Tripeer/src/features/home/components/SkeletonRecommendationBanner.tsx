import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../modules/skeletonRecommendationBanner.module.css';
import { Fragment } from 'react/jsx-runtime';
const SkeletonRecommendationBanner = () => {
  return (
    <div className={styles.container}>
      <Fragment>
        <div className={styles.title}></div>
        <Swiper slidesPerView={'auto'} style={{ width: '100%' }}>
          {[1, 2, 3, 4].map((item) => {
            return (
              <SwiperSlide className={styles.swiperSlide} key={item}>
                <div className={styles.slideContainer}>
                  <div className={styles.imgBox}>
                    <div className={styles.img} />
                  </div>
                  <section className={styles.description}>
                    <div className={styles.box1}></div>
                    <div className={styles.box2}></div>
                    <div className={styles.box3}></div>
                    <div className={styles.box4}></div>
                  </section>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Fragment>
    </div>
  );
};
export default SkeletonRecommendationBanner;
