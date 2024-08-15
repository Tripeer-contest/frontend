import { Swiper } from 'swiper/react';
import { ReactNode } from 'react';
import 'swiper/css';

import styles from '../assets/page.module.css';

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  730: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1300: {
    slidesPerView: 3,
    spaceBetween: 100,
  },
};

export default function CardsLayout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.box}>
      <Swiper breakpoints={breakpoints} className={styles.swiper}>
        {children}
      </Swiper>
    </main>
  );
}
