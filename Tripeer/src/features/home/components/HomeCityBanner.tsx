import styles from '../modules/homeCityBanner.module.css';
import 'swiper/css';
import useHomeCityBanner from '../hooks/useHomeCityBanner.tsx';
import { Region as cityList } from '../../../data/RegionCategory.ts';
import { Swiper, SwiperSlide } from 'swiper/react';
import zustandStore from '../../../store/store.tsx';

const HomeCityBanner = () => {
  const { cityClickHandler, changeIdx } = useHomeCityBanner();

  const h_nowCityId = zustandStore((state) => state.h_nowCityId);

  return (
    <div className={styles.container}>
      <Swiper slidesPerView={'auto'} grabCursor={true}>
        {cityList.map((city, idx) => {
          const id = changeIdx(idx);

          return (
            <SwiperSlide
              key={`${city}-${id}`}
              className={styles.imgBox}
              onClick={() => cityClickHandler(city)}
            >
              <img
                src={city.img}
                alt={city.name}
                className={id === h_nowCityId ? styles.check : ''}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HomeCityBanner;
