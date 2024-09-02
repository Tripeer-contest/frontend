import styles from '../assets/header.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInterface } from 'swiper/types';
import { useState } from 'react';

import 'swiper/css';
import { useParams } from 'react-router-dom';
import useSpotDetailQuery from '../hooks/useSpotDetailQuery';
import SpotHeart from './SpotHeart';

type HeaderType = string[];

export default function SpotHeader() {
  const [swiper, setSwiper] = useState<SwiperInterface | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const params = useParams();
  const id = params.id ? +params.id : NaN;
  const { data } = useSpotDetailQuery<HeaderType>(
    id,
    (data) => data.data.imageList,
  );
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
    </header>
  );
}
