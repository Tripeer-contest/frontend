// 내부 모듈
import PlanCard from './PlanCard';
import PlanCreate from './PlanCreate';
import usePlan from '../hooks/usePlan';
import CardsLayout from '../layout/CardsLayout';

// 외부 모듈
import { SwiperSlide } from 'swiper/react';
import { PlanCardType } from '../types/PlanTypes';

export default function PlanItems() {
  const data = usePlan();
  const cards: PlanCardType[] = data.data;
  return (
    <CardsLayout>
      {cards.map((item, idx) => (
        <SwiperSlide key={idx} style={{ width: '300px', height: '310px' }}>
          <PlanCard data={item} />
        </SwiperSlide>
      ))}
      {cards.length < 6 ? (
        <SwiperSlide style={{ width: '300px', height: '310px' }}>
          <PlanCreate />
        </SwiperSlide>
      ) : undefined}
    </CardsLayout>
  );
}
