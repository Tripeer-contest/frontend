import styles from '../assets/header.module.css';
import fullHeart from '../../../assets/button/full_heart.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInterface } from 'swiper/types';
import { useState } from 'react';

import 'swiper/css';

export default function SpotHeader() {
  const [swiper, setSwiper] = useState<SwiperInterface | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = swiper && swiper.slides ? swiper.slides.length : 1;
  return (
    <header className={styles.header}>
      <Swiper
        slidesPerView={1}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        onSlideChange={() => {
          setCurrentPage(swiper ? swiper.realIndex + 1 : 1);
        }}
        loop={true}
      >
        {[1, 2, 3].map((data) => {
          return (
            <SwiperSlide className={styles.container} key={data}>
              <img
                className={styles.img}
                src="https://cdn.pixabay.com/photo/2022/10/24/12/20/mountains-7543273_1280.jpg"
                alt="spot-img"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <img src={fullHeart} alt="heart-btn" className={styles.heart} />
      <div className={styles.page}>{`${currentPage} / ${maxPage}`}</div>
    </header>
  );
}
