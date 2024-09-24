import styles from '../modules/homeSlide.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import PlaceBox from './PlaceBox.tsx';
import { RecommendType } from '../../../types/PlaceType.ts';
import usePlaceBox from '../hooks/usePlaceBox.tsx';

interface Props {
  data: RecommendType;
}

const HomeSlide = ({ data }: Props) => {
  const { clickHandler, likeClickHandler } = usePlaceBox();
  return (
    <div className={styles.container}>
      <Swiper slidesPerView={'auto'} grabCursor={true}>
        {data.spotInfoDtos.map((item, idx) => (
          <SwiperSlide key={`${item}-${idx}`} className={styles.swiperSlide}>
            <PlaceBox
              place={item}
              clickHandler={() => clickHandler(item.spotId)}
              likeClickHandler={likeClickHandler}
              rating={item.starPointAvg}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlide;
