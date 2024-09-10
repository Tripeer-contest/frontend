import styles from '../modules/homeSlide.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import PlaceBox from './PlaceBox.tsx';

const test = {
  spotId: 1,
  spotName: '신라스테이 해운대',
  spotImg: 'https://tripeer207.s3.ap-northeast-2.amazonaws.com/spot/136039.png',
  address: '부산 해운대구 해운대로 507번길 46',
  wishlist: false,
};
const testData = [test, test, test, test, test, test, test];

const HomeSlide = () => {
  return (
    <div className={styles.container}>
      <Swiper slidesPerView={'auto'} grabCursor={true}>
        {testData.map((item, idx) => (
          <SwiperSlide key={`${item}-${idx}`} className={styles.swiperSlide}>
            <PlaceBox
              place={item}
              clickHandler={() => {}}
              likeClickHandler={() => {}}
              rating={4.5}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlide;
