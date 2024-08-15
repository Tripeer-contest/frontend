import styles from '../assets/modal.module.css';
import backIcon from '../../../assets/button/back.svg';
import { ModalProps } from '../../../types/PlanTypes';
import zustandStore from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';

export default function CreatePlanLayout({ pageInfo, children }: ModalProps) {
  const { title, mobileTitle, backHandler, canNext } = pageInfo;
  const [planToNext, planPage, planToPrev] = zustandStore(
    useShallow((state) => [state.planToNext, state.planPage, state.planToPrev]),
  );

  const nextHandler = () => {
    if (canNext) planToNext();
  };

  const prevHandler = () => {
    if (planPage === 0) backHandler();
    else planToPrev();
  };
  return (
    <div className={styles.createPlanContainer}>
      <header className={styles.desktopHeader}>
        <p className={styles.title}>{title}</p>
        <p
          className={canNext ? styles.nextText : styles.notAllowText}
          onClick={nextHandler}
        >
          다음
        </p>
      </header>
      <header className={styles.mobileHeader}>
        <img
          src={backIcon}
          alt="back-icon"
          className={styles.headerIcon}
          onClick={prevHandler}
        />
        <span>{mobileTitle}</span>
      </header>
      {children}
      <button
        className={styles.nextBtn}
        disabled={!canNext}
        onClick={nextHandler}
      >
        {canNext ? '다음' : '입력을 완료해주세요'}
      </button>
    </div>
  );
}
