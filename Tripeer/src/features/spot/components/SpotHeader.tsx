import styles from '../assets/header.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInterface } from 'swiper/types';
import { useState } from 'react';

import 'swiper/css';
import useSpotDetailQuery from '../hooks/useSpotDetailQuery';
import SpotHeart from './SpotHeart';
import useParamsId from '../hooks/useParamsId';
import usePrevPage from '../hooks/usePrevPage';
import back_icon from '../../../assets/button/back_white.svg';

type HeaderType = string[];

export default function SpotHeader() {
  const [swiper, setSwiper] = useState<SwiperInterface | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const id = useParamsId();
  const { data } = useSpotDetailQuery<HeaderType>(
    id,
    (data) => data.data.imageList,
  );
  const { goBack, prevPage } = usePrevPage();

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
        {data.map((img, idx) => {
          return (
            <SwiperSlide className={styles.container} key={idx}>
              <img className={styles.img} src={img} alt="spot-img" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <SpotHeart />
      <div className={styles.page}>{`${currentPage} / ${maxPage}`}</div>
      {prevPage && (
        <img
          src={back_icon}
          alt="back"
          className={styles.back}
          onClick={goBack}
        />
      )}
    </header>
  );
}
