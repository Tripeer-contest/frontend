import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PlaceBox from '../../home/components/PlaceBox';
import styles from '../assets/simular.module.css';
import useParamsId from '../hooks/useParamsId';
import { PlaceDetailType } from '../../../types/PlaceType';
import useSpotDetailQuery from '../hooks/useSpotDetailQuery';

export default function SpotSimular() {
  const id = useParamsId();
  const SimilarSpot = useSpotDetailQuery<PlaceDetailType[]>(
    id,
    (data) => data.data.similarSpotList,
  );
  const NearSpot = useSpotDetailQuery<PlaceDetailType[]>(
    id,
    (data) => data.data.nearSpotList,
  );

  return (
    <div className={styles.marginBox}>
      <section className={styles.container}>
        <h3>이곳과 비슷한 장소는</h3>
        <Swiper
          slidesPerView={'auto'}
          style={{ width: '100%' }}
          spaceBetween={25}
        >
          {SimilarSpot.data.map((item) => (
            <SwiperSlide key={item.spotId} className={styles.itemBox}>
              <PlaceBox place={item} />
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
          {NearSpot.data.map((item) => (
            <SwiperSlide key={item.spotId} className={styles.itemBox}>
              <PlaceBox place={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
