import { SwiperSlide } from 'swiper/react';

import PlanCard from './PlanCard';
import PlanCreate from './PlanCreate';
import usePlan from '../hooks/usePlan';
import CardsLayout from '../layout/CardsLayout';

const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  730: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1300: {
    slidesPerView: 3,
    spaceBetween: 100,
  },
};

export default function PlanItems() {
  const data = usePlan();
  console.log(data);
  return (
    <CardsLayout>
      {[1, 2, 3, 4, 5].map((item) => (
        <SwiperSlide key={item}>
          <PlanCard />
        </SwiperSlide>
      ))}
      <SwiperSlide>
        <PlanCreate />
      </SwiperSlide>
    </CardsLayout>
  );
}
