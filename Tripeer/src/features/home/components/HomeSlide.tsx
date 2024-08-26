import styles from '../modules/homeSlide.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import PlaceBox from './PlaceBox.tsx';

const testData = [1, 2, 3, 4, 5, 6, 7, 8];

const HomeSlide = () => {
  return (
    <div className={styles.container}>
      <Swiper slidesPerView={'auto'} grabCursor={true}>
        {testData.map((item, idx) => (
          <SwiperSlide key={`${item}-${idx}`} className={styles.swiperSlide}>
            <PlaceBox />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlide;
