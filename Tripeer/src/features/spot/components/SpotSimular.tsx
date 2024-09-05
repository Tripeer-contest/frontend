import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PlaceBox from '../../home/components/PlaceBox';
import styles from '../assets/simular.module.css';

export default function SpotSimular() {
  const items = [1, 2, 3, 4, 5];
  const testData = {
    spotId: 1,
    spotName: '이름',
    spotImg: '../../home/assets/testImg.png',
    address: '주소',
    wishlist: false,
  };
  return (
    <>
      <section className={styles.container}>
        <h3>이곳과 비슷한 장소는</h3>
        <Swiper
          slidesPerView={'auto'}
          style={{ width: '100%' }}
          spaceBetween={25}
        >
          {items.map((item) => (
            <SwiperSlide key={item} className={styles.itemBox}>
              <PlaceBox place={testData} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className={styles.container}>
        <h3>여기 근처 가볼만한 장소는</h3>
        <Swiper
          slidesPerView={'auto'}
          style={{ width: '100%' }}
          spaceBetween={25}
        >
          {items.map((item) => (
            <SwiperSlide key={item} className={styles.itemBox}>
              <PlaceBox place={testData} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
