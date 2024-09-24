import styles from '../../../assets/calendar/Mobile/footer.module.css';
import rootImage from '../../../assets/calendar/assets/root.png';
import useRoot from '../hooks/useRoot.tsx';
import PlanNavigate from '../common/PlanNavigate.tsx';

const RootBtn = () => {
  const { clickHandler, close, PlanModal } = useRoot();

  return (
    <>
      <main className={styles.rootBtn} onClick={clickHandler}>
        <img src={rootImage} alt={'Root Image'} className={styles.rootImage} />
      </main>
      <PlanModal onClose={close} className={styles.modalContainer}>
        <PlanNavigate startIdx={1} closeHandler={close} />
      </PlanModal>
    </>
  );
};

export default RootBtn;
