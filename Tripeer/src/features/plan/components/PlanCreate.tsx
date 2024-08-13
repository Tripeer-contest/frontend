import useModal from '../../../hooks/useModal';
import PlanCreateCard from './PlanCreateCard';
import styles from '../assets/modal.module.css';
import PlanSearch from './search/PlanSearch';
import zustandStore from '../../../store/store';

import { useEffect } from 'react';
import PlanCalendar from './calendar/PlanCalendar';

export default function PlanCreate() {
  const { open, ModalLayout, close } = useModal();
  const { initCreatePlan, planPage } = zustandStore();

  const ModalPages = [
    <PlanSearch close={close} key="plan-search" />,
    <PlanCalendar key="plan-calendar" />,
  ];

  useEffect(() => {
    initCreatePlan();
  }, [initCreatePlan]);

  return (
    <>
      <PlanCreateCard open={open} />
      <ModalLayout className={styles.container}>
        {ModalPages[planPage]}
      </ModalLayout>
    </>
  );
}
