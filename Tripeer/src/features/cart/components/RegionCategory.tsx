import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import styles from '../asset/header.module.css';
import zustandStore from '../../../store/store';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { RegionType } from '../../../types/ItemTypes';
import { handleErrorImg } from '../../../data/defaultImg';

export default function RegionCategory({
  category,
}: {
  category: RegionType[];
}) {
  const [cart_selectCategory, cart_init, cart_setCategory] = zustandStore(
    useShallow((state) => [
      state.cart_selectCategory,
      state.cart_init,
      state.cart_setCategory,
    ]),
  );

  const checkInActive = (id: number) => {
    return id === cart_selectCategory ? undefined : styles.inactiveSlider;
  };

  const clickHandler = (id: number) => {
    cart_setCategory(id);
  };

  useEffect(() => {
    cart_init();
  }, [cart_init]);

  return (
    <Swiper slidesPerView={'auto'} spaceBetween={15} style={{ width: '100%' }}>
      {category.map((region) => (
        <SwiperSlide
          key={region.cityId}
          className={styles.slider}
          onClick={() => clickHandler(region.cityId)}
        >
          <img
            src={region.img}
            alt={region.name}
            className={styles.slider}
            onError={handleErrorImg}
          />
          <div className={checkInActive(region.cityId)}></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
