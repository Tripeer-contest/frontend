import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from '../../../assets/map/mapNav/placeMap.module.css';
import zustandStore from '../../../../../store/store';
import { useShallow } from 'zustand/react/shallow';
import likeIcon from '../../../../../assets/button/like.svg';

export default function MapCategory({
  categoryList,
  setIsRecommendSelected,
}: {
  categoryList: string[];
  setIsRecommendSelected?: (params: boolean) => void;
}) {
  const [setKeyword, keyword] = zustandStore(
    useShallow((state) => [
      state.room_setMapSearchKeyword,
      state.room_mapSearchKeyword,
    ]),
  );
  const clickHandler = (category: string) => {
    if (category === '추천') {
      setIsRecommendSelected && setIsRecommendSelected(true);
      setKeyword('');
    } else {
      setIsRecommendSelected && setIsRecommendSelected(false);
      setKeyword(category);
    }
  };
  const getCategroyStyle = (category: string) => {
    if (category === '추천') {
      return styles.categoryItem;
    } else {
      return keyword === category
        ? styles.activeCategoryBtn
        : styles.categoryBtn;
    }
  };
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={15}
      style={{ display: 'flex', paddingLeft: '12px' }}
    >
      {categoryList.map((category, idx) => (
        <SwiperSlide
          key={idx}
          className={getCategroyStyle(category)}
          onClick={() => clickHandler(category)}
        >
          {category === '추천' ? (
            <>
              <img src={likeIcon} className={styles.likeIcon} alt="like-icon" />
              <span>{category}</span>
            </>
          ) : (
            <p>{category}</p>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
