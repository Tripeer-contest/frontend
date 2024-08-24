import styles from '../modules/homeCategoryChips.module.css';
import { TownType } from '../../../types/TownType.ts';
import TownChip from './TownChip.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
  title: string;
  arr: TownType[];
}

const HomeCategoryChips = ({ title, arr }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.line} />
      <Swiper
        slidesPerView={'auto'}
        grabCursor={true}
        className={styles.swiper}
      >
        {arr.map((item, idx) => (
          <SwiperSlide key={`${item}-${idx}`} className={styles.chipBox}>
            <TownChip
              key={`${item}-${idx}`}
              title={item.townName}
              id={item.townId}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCategoryChips;
