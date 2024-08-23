import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store';
import { ReactNode, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import useCreatePlan from '../hooks/useCreatePlan';
import { PlanCardType } from '../types/PlanTypes';
import styles from '../assets/confirm.module.css';
import backIcon from '../../../assets/button/back.svg';
import MutationLoading from '../../../components/loading/MutationLoading';

export default function ConfirmPlanLayout({
  close,
  children,
}: {
  close: () => void;
  children: ReactNode;
}) {
  const [planToPrev, title, townList, startDay, endDay] = zustandStore(
    useShallow((state) => [
      state.planToPrev,
      state.planTitle,
      state.spots,
      state.startDay,
      state.endDay,
    ]),
  );
  const queryClient = useQueryClient();
  const mutation = useCreatePlan({ title, townList, startDay, endDay });
  const nextHandler = () => {
    const existPlan = queryClient.getQueryData<{ data: PlanCardType[] }>([
      'plan',
    ]);
    if (existPlan && existPlan.data.length < 6) {
      mutation.mutate();
    } else {
      close();
    }
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      close();
    }
  }, [mutation.isSuccess, close]);

  const prevHandler = () => {
    planToPrev();
  };
  return (
    <div className={styles.createPlanContainer}>
      <header className={styles.desktopHeader}>
        <p className={styles.title}>여행 계획 정보를 확인해주세요.</p>
        <p className={styles.nextText} onClick={nextHandler}>
          생성
        </p>
      </header>
      <header className={styles.mobileHeader}>
        <img
          src={backIcon}
          alt="back-icon"
          className={styles.headerIcon}
          onClick={prevHandler}
        />
        <span>여행 정보 확인</span>
      </header>
      {children}
      <button className={styles.nextBtn} onClick={nextHandler}>
        생성
      </button>
      <MutationLoading isShow={mutation.isPending} />
    </div>
  );
}
