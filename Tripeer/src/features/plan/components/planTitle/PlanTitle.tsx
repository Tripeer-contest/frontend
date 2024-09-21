import CreatePlanLayout from '../../layout/CreatePlanLayout';
import styles from '../../assets/title.module.css';
import travel_illustration from '../../assets/img/travel_illust.svg';

import zustandStore from '../../../../store/store';
import { useShallow } from 'zustand/react/shallow';
import { ChangeEvent } from 'react';

export default function PlanTitle() {
  const [planTitle, setTitle, pagePrev] = zustandStore(
    useShallow((state) => [state.planTitle, state.setTitle, state.planToPrev]),
  );
  const pageInfo = {
    title: '여행 계획의 이름을 생성해주세요.',
    mobileTitle: '계획 이름 설정',
    backHandler: pagePrev,
    canNext: planTitle !== '',
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <CreatePlanLayout pageInfo={pageInfo}>
      <div className={styles.container}>
        <img
          src={travel_illustration}
          alt="bus-animation"
          className={styles.animation}
        />
        <h3 className={styles.title}>계획 이름을 입력해주세요.</h3>
        <input
          type="text"
          maxLength={10}
          placeholder="10글자 내로 입력하세요."
          className={styles.input}
          value={planTitle}
          onChange={(e) => changeHandler(e)}
        />
      </div>
    </CreatePlanLayout>
  );
}
