import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../../assets/map/mapNav/recommend.module.css';
import RecommendCard from './RecommendCard';
import 'swiper/css';

export default function RecommendContent() {
  Swiper;
  return (
    <main className={styles.contentContainer}>
      <section className={styles.cardlistBox}>
        <h1 className={styles.title}>호텔을 즐겨찾는 당신의 위해</h1>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={20}
          style={{ display: 'flex' }}
        >
          {[1, 2, 3, 4, 5, 6].map((card, idx) => {
            return (
              <SwiperSlide key={idx} style={{ width: '150px' }}>
                <RecommendCard card={card} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </main>
  );
}
