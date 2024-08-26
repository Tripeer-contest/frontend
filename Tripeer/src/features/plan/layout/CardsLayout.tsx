import { Swiper } from 'swiper/react';
import { ReactNode } from 'react';
import 'swiper/css';

export default function CardsLayout({ children }: { children: ReactNode }) {
  return (
    <Swiper slidesPerView={'auto'} style={{ margin: 0 }} spaceBetween={20}>
      {children}
    </Swiper>
  );
}
