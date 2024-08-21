import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function RegionCategory() {
  return (
    <Swiper slidesPerView={'auto'} spaceBetween={10} style={{ width: '100%' }}>
      {[...Array.from({ length: 20 })].map((_, idx) => (
        <SwiperSlide
          key={idx}
          style={{
            width: '150px',
            height: '150px',
            backgroundColor: '#C4C4C4',
            borderRadius: '5px',
          }}
        ></SwiperSlide>
      ))}
    </Swiper>
  );
}
