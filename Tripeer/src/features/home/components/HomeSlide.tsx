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
            <PlaceBox
              name={'신라스테이 해운대'}
              address={'부산 해운대구 해운대로 507번길 46'}
              img={
                'https://tripeer207.s3.ap-northeast-2.amazonaws.com/spot/136039.png'
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlide;
