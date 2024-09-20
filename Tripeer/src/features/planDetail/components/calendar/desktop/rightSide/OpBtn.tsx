import styles from '../../../../assets/calendar/Desktop/rightSide/opBtn.module.css';
import carImage from '../../../../assets/calendar/assets/car.png';
import carClickImage from '../../../../assets/calendar/assets/carClick.png';
import transportClickImage from '../../../../assets/calendar/assets/transportClick.png';
import transportImage from '../../../../assets/calendar/assets/transport.png';
import checkImage from '../../../../assets/calendar/assets/check.png';
import useOpt from '../../hooks/useOpt.tsx';
import zustandStore from '../../../../../../store/store.tsx';

const OpBtn = ({ day, idx }: { day: string; idx: number }) => {
  const totalYList = zustandStore((state) => state.room_totalYList);
  const {
    onClickHandler,
    PlanModal,
    onSelectHandler,
    select,
    onSubmitHandler,
    close,
    onModalHandler,
    text,
    onCLickLabel,
    isLabel,
    alert,
  } = useOpt();

  return (
    <main className={styles.container} onClick={() => onClickHandler(idx)}>
      최단거리계산
      <PlanModal
        onClose={close}
        onClick={() => onModalHandler(close)}
        className={styles.modalContainer}
      >
        <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
          <p className={styles.day}>1일차 {day}</p>
          <p className={styles.green}>첫번째 장소</p>
          <p className={styles.place}>{totalYList[idx]?.[0]?.title}</p>
          <p className={styles.green}>마지막장소</p>
          <p className={styles.place}>
            {totalYList[idx]?.[totalYList[idx].length - 1]?.title}
          </p>
          <p className={styles.green}>교통수단 선택</p>
          <div className={styles.selectBox}>
            <div
              className={`${styles.box} ${select === '0' ? styles.boxClick : ''}`}
              onClick={() => onSelectHandler('0')}
            >
              <p>자가용</p>
              <img
                src={select !== '0' ? carImage : carClickImage}
                alt={'Car Image'}
                className={styles.carImage}
              />
            </div>
            <div
              className={`${styles.box} ${select === '1' ? styles.boxClick : ''}`}
              onClick={() => onSelectHandler('1')}
            >
              <p>대중교통</p>
              <img
                src={select !== '1' ? transportImage : transportClickImage}
                alt={'Transport Image'}
                className={styles.transportImage}
              />
            </div>
          </div>
          {select === '1' ? (
            <label className={styles.inputBox} onClick={onCLickLabel}>
              <label
                className={`${styles.input} ${isLabel ? styles.inputCheck : ''}`}
              >
                {isLabel && (
                  <img
                    src={checkImage}
                    alt={'Check Image'}
                    className={styles.checkImage}
                  />
                )}
              </label>
              <p className={styles.inputText}>
                항해, 항공 교통수단을 포함하시겠습니까?
              </p>
            </label>
          ) : (
            <div className={styles.noneBox} />
          )}
          <div className={styles.btn} onClick={() => onSubmitHandler(close)}>
            {text}
          </div>
        </div>
      </PlanModal>
      <alert.PlanModal
        onClose={alert.close}
        className={styles.alertContainer}
        onClick={alert.close}
      >
        <div className={styles.alertBox}>
          <p>2개 이상의 장소를 추가해주세요</p>
          <div className={styles.alertSubmit}>확인</div>
        </div>
      </alert.PlanModal>
    </main>
  );
};

export default OpBtn;
