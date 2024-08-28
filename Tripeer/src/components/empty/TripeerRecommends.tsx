import styles from './assets/recommends.module.css';
import bannerData from '../../data/bannerData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function TripeerRecommends({
  className,
}: {
  className?: string;
}) {
  const container = className ? className : styles.container;
  return (
    <figure className={container}>
      <h3>트리피어가 추천하는 여행지 둘러보기</h3>
      <Swiper
        slidesPerView={'auto'}
        style={{ width: '100%' }}
        spaceBetween={20}
        loop={true}
        nested={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {bannerData.map((banner) => (
          <SwiperSlide style={{ width: '200px' }} key={banner.id}>
            <img
              src={banner.img}
              alt={`banner-${banner.title}`}
              className={styles.imgSlide}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </figure>
  );
}
