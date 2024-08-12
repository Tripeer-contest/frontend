// 내부 모듈
import PlanCard from './PlanCard';
import PlanCreate from './PlanCreate';
import usePlan from '../hooks/usePlan';
import CardsLayout from '../layout/CardsLayout';

// 외부 모듈
import { SwiperSlide } from 'swiper/react';

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
