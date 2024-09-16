import styles from '../assets/header.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInterface } from 'swiper/types';
import { useState } from 'react';

import 'swiper/css';
import useSpotDetailQuery from '../hooks/useSpotDetailQuery';
import SpotHeart from './SpotHeart';
import back_icon from '../../../assets/button/back_white.svg';
import { useNavigate } from 'react-router-dom';

type HeaderType = string[];

export default function SpotHeader({
  isPrevPage,
  id,
}: {
  isPrevPage: boolean;
  id: number;
}) {
  const [swiper, setSwiper] = useState<SwiperInterface | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useSpotDetailQuery<HeaderType>(
    id,
    (data) => data.data.imageList,
  );
  const navigate = useNavigate();

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
      <SpotHeart id={id} />
      <div className={styles.page}>{`${currentPage} / ${maxPage}`}</div>
      {isPrevPage && (
        <img
          src={back_icon}
          alt="back"
          className={styles.back}
          onClick={() => navigate(-1)}
        />
      )}
    </header>
  );
}
