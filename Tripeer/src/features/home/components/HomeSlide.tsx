import styles from '../modules/homeSlide.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import PlaceBox from './PlaceBox.tsx';
import { RecommendType } from '../../../types/PlaceType.ts';

interface Props {
  data: RecommendType;
}

const HomeSlide = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <Swiper slidesPerView={'auto'} grabCursor={true}>
        {data.spotInfoDtos.map((item, idx) => (
          <SwiperSlide key={`${item}-${idx}`} className={styles.swiperSlide}>
            <PlaceBox
              place={item}
              clickHandler={() => {}}
              likeClickHandler={() => {}}
              rating={4.5}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlide;
