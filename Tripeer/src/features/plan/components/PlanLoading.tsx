import { SwiperSlide } from 'swiper/react';
import styles from '../assets/loading.module.css';
import CardsLayout from '../layout/CardsLayout';

export default function PlanLoading() {
  return (
    <CardsLayout>
      {[1, 2, 3].map((item) => (
        <SwiperSlide key={item}>
          <div className={styles.card}>
            <div className={styles.cardImg} />
            <div className={styles.cardInfo}>
              <p className={styles.cardTitle}></p>
              <div className={styles.detailInfo}>
                <p className={styles.loacition}></p>
              </div>
              <div className={styles.layoutInfo}>
                <div className={styles.detailInfo}>
                  <p className={styles.schedule}></p>
                </div>
                <div className={styles.detailInfo}>
                  <p className={styles.member}></p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </CardsLayout>
  );
}
