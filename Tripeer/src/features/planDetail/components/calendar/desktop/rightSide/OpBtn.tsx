import styles from '../../../../assets/calendar/Desktop/rightSide/opBtn.module.css';
import useOpt from '../../hooks/useOpt.tsx';

const OpBtn = () => {
  const { onClickHandler } = useOpt();

  return (
    <main className={styles.container} onClick={onClickHandler}>
      최단거리계산
    </main>
  );
};

export default OpBtn;
