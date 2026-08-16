import zustandStore from '../../../../store/store';
import CreatePlanLayout from '../../layout/CreatePlanLayout';
import Calendars from './Calendars';

import { useShallow } from 'zustand/react/shallow';

export default function PlanCalendar() {
  const [startDay, endDay, pagePrev] = zustandStore(
    useShallow((state) => [state.startDay, state.endDay, state.planToPrev]),
  );
  const pageInfo = {
    title: '여행 날짜를 선택해주세요.',
    mobileTitle: '일정 선택',
    backHandler: pagePrev,
    canNext: startDay !== '' && endDay !== '',
  };
  return (
    <CreatePlanLayout pageInfo={pageInfo}>
      <Calendars />
    </CreatePlanLayout>
  );
}
