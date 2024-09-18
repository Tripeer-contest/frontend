import styles from '../../../../assets/calendar/Desktop/rightSide/opBtn.module.css';
import useOpt from '../../hooks/useOpt.tsx';

const OpBtn = ({ day }: { day: string }) => {
  const { onClickHandler, close, PlanModal } = useOpt();

  return (
    <main className={styles.container} onClick={onClickHandler}>
      최단거리계산
      <PlanModal onClose={close}>
        <div className={styles.modalBox}>
          <p className={styles.day}>1일차({day})</p>
          <p className={styles.green}>첫번째 장소</p>
          <p>블라블라 숙소</p>
          <p>마지막장소</p>
          <p>블라블라 음식점</p>
          <p>교통수단 선택</p>
          <div>
            <div>
              <p>자가용</p>
              <img />
            </div>
            <div>
              <p>대중교통</p>
              <img />
            </div>
          </div>
          <div>확인</div>
        </div>
      </PlanModal>
    </main>
  );
};

export default OpBtn;
