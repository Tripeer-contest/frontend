import styles from '../modules/homeCityBanner.module.css';
import 'swiper/css';
import { useShallow } from 'zustand/react/shallow';
import useHomeCityBanner from '../hooks/useHomeCityBanner.tsx';
import { Region as cityList } from '../../../data/RegionCategory.ts';
import { Swiper, SwiperSlide } from 'swiper/react';
import zustandStore from '../../../store/store.tsx';

const HomeCityBanner = () => {
  const { cityClickHandler } = useHomeCityBanner();

  const [h_nowCityId] = zustandStore(
    useShallow((state) => [state.h_nowCityId]),
  );

  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={15}
        breakpoints={{
          1000: { spaceBetween: 20 },
        }}
        grabCursor={true}
        className={styles.swiper}
      >
        {cityList.map((city, idx) => {
          return (
            <SwiperSlide
              key={`${city}-${idx}`}
              className={styles.imgBox}
              onClick={() => cityClickHandler(city.cityId)}
            >
              <img
                src={city.img}
                alt={city.name}
                className={`${city.cityId !== h_nowCityId ? styles.check : ''} ${styles.img}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeCityBanner;
