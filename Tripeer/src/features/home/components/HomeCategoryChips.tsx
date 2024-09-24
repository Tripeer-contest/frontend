import styles from '../modules/homeCategoryChips.module.css';
import { TownType } from '../../../types/TownType.ts';
import { PlaceCategoryTypes } from '../../../types/PlaceCategoryTypes.ts';
import TownChip from './TownChip.tsx';
import PlaceChip from './PlaceChip.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
  title: string;
  arr: TownType[] | PlaceCategoryTypes[];
  type: 'town' | 'category';
}

const HomeCategoryChips = ({ title, arr, type }: Props) => {
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
            {type === 'town' ? (
              <TownChip key={`${item}-${idx}`} title={item.name} id={item.id} />
            ) : (
              <PlaceChip
                key={`${item}-${idx}`}
                title={item.name}
                id={item.id}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCategoryChips;
