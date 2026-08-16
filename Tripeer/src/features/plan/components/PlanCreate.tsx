import useModal from '../../../hooks/useModal';
import PlanCreateCard from './PlanCreateCard';
import styles from '../assets/modal.module.css';
import PlanSearch from './search/PlanSearch';
import zustandStore from '../../../store/store';
import PlanCalendar from './calendar/PlanCalendar';

import { useShallow } from 'zustand/react/shallow';
import PlanTitle from './planTitle/PlanTitle';
import PlanConfirm from './confirm/PlanConfirm';

export default function PlanCreate() {
  const { open, ModalLayout, close } = useModal();
  const [initCreatePlan, planPage] = zustandStore(
    useShallow((state) => [state.initCreatePlan, state.planPage]),
  );

  const ModalPages = [
    <PlanSearch close={close} key="plan-search" />,
    <PlanCalendar key="plan-calendar" />,
    <PlanTitle key="plan-title" />,
    <PlanConfirm close={close} key="plan-confirm" />,
  ];

  return (
    <>
      <PlanCreateCard open={open} />
      <ModalLayout className={styles.container} onClose={initCreatePlan}>
        {ModalPages[planPage]}
      </ModalLayout>
    </>
  );
}
