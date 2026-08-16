import styles from './assets/recommends.module.css';
import bannerData from '../../data/bannerData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { useNavigate } from 'react-router-dom';

export default function RecommendSlide() {
  const navigate = useNavigate();
  const handleBannerClick = (idx: number) => {
    navigate(`/banner/${idx}`);
  };

  return (
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
      {bannerData.map((banner, idx) => (
        <SwiperSlide style={{ width: '200px' }} key={banner.id}>
          <img
            src={banner.img}
            alt={`banner-${banner.title}`}
            className={styles.imgSlide}
            loading="lazy"
            onClick={() => {
              handleBannerClick(idx);
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
