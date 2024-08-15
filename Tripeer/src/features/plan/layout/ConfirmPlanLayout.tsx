import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store';
import styles from '../assets/confirm.module.css';
import backIcon from '../../../assets/button/back.svg';
import { ReactNode } from 'react';

export default function ConfirmPlanLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [planToPrev] = zustandStore(useShallow((state) => [state.planToPrev]));

  const nextHandler = () => {
    alert('추후 업데이트 예정.');
  };

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
    </div>
  );
}
