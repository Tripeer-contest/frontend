import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from '../../../assets/map/mapNav/placeMap.module.css';
import zustandStore from '../../../../../store/store';

const CATEGORY_LIST = ['여행지', '숙박', '맛집', '명소', '즐겨찾기'];

export default function MapCategory() {
  const setKeyword = zustandStore((state) => state.room_setMapSearchKeyword);
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={15}
      style={{ display: 'flex', paddingLeft: '12px' }}
    >
      {CATEGORY_LIST.map((category, idx) => (
        <SwiperSlide
          key={idx}
          className={styles.categoryBtn}
          onClick={() => setKeyword(category)}
        >
          {category}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
