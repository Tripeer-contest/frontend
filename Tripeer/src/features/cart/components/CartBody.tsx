import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperInterface } from 'swiper/types';
import { useMemo, useState } from 'react';

import 'swiper/css';

import CartController from '../../../components/controller/ListController';
import CartList from './CartList';
import { ContentCategory } from '../../../types/ItemTypes';
import { filterByCategory } from '../utils/filterItem';
import useGetExistWish from '../hooks/useGetExistWish';

const Category: ContentCategory[] = ['전체', '숙박', '맛집', '명소'];

// 카테고리 총괄, swiper, cartController 컴포넌트 동기화 역할
export default function CartBody() {
  const wishList = useGetExistWish();
  const [swiper, setSwiper] = useState<SwiperInterface | undefined>();
  const [selectedCategry, setSelectedCategory] = useState(0);

  const slideTo = (idx: number) => {
    if (swiper) {
      swiper.slideTo(idx);
      setSelectedCategory(idx);
    }
  };

  const handleSlide = (swiper: SwiperInterface) => {
    setSelectedCategory(swiper.activeIndex);
  };

  const wishItemList = useMemo(() => {
    return filterByCategory(wishList);
  }, [wishList]);

  return (
    <>
      <CartController
        Category={Category}
        slideTo={slideTo}
        selectedCategry={selectedCategry}
      />
      <Swiper
        onSwiper={setSwiper}
        slidesPerView={1}
        onSlideChange={handleSlide}
      >
        {Category.map((category) => (
          <SwiperSlide key={category}>
            <CartList items={wishItemList[category]} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
