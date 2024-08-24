import styles from '../modules/homeCityBanner.module.css';
import 'swiper/css';
import useHomeCityBanner from '../hooks/useHomeCityBanner.tsx';
import { Region as cityList } from '../../../data/RegionCategory.ts';
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeCityBanner = () => {
  const { cityClickHandler } = useHomeCityBanner();

  return (
    <div className={styles.container}>
      <Swiper slidesPerView={'auto'} grabCursor={true}>
        {cityList.map((city, idx) => (
          <SwiperSlide
            key={`${city}-${idx}`}
            className={styles.imgBox}
            onClick={() => cityClickHandler(city)}
          >
            <img src={city.img} alt={city.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCityBanner;
