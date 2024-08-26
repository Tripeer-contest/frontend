import styles from '../modules/homeCategoryChips.module.css';
import { TownType } from '../../../types/TownType.ts';
import { PlaceCategoryTypes } from '../../../types/PlaceCategoryTypes.ts';
import TownChip from './TownChip.tsx';
import PlaceChip from './PlaceChip.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import useHomeCategoryChips from '../hooks/useHomeCategoryChips.tsx';

interface Props {
  title: string;
  arr: TownType[] | PlaceCategoryTypes[];
}

const HomeCategoryChips = ({ title, arr }: Props) => {
  const { isTownType } = useHomeCategoryChips();

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
            {isTownType(item) ? (
              <TownChip
                key={`${item}-${idx}`}
                title={item.townName}
                id={item.townId}
              />
            ) : (
              <PlaceChip
                key={`${item}-${idx}`}
                title={item.name}
                id={item.id}
                image={item.image}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCategoryChips;
