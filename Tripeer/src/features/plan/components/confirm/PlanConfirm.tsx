import ConfirmPlanLayout from '../../layout/ConfirmPlanLayout';
import styles from '../../assets/confirm.module.css';
import zustandStore from '../../../../store/store';
import { useShallow } from 'zustand/react/shallow';
export default function PlanConfirm() {
  const [title, spots, startDay, endDay] = zustandStore(
    useShallow((state) => [
      state.planTitle,
      state.spots,
      state.startDay,
      state.endDay,
    ]),
  );

  const writeComma = (len: number) => {
    return spots.length - 1 === len ? '' : ', ';
  };
  return (
    <ConfirmPlanLayout>
      <div className={styles.container}>
        <div className={styles.section}>
          <p className={styles.quest}>여행 계획 이름</p>
          <p>{title}</p>
        </div>
        <div className={styles.section}>
          <p className={styles.quest}>여행지</p>
          <p className={styles.overFlowText}>
            {spots.map((spot, id) => (
              <span key={spot.idx}>{`${spot.name}${writeComma(id)}`}</span>
            ))}
          </p>
        </div>
        <div className={styles.section}>
          <p className={styles.quest}>여행 기간</p>
          <p>{`${startDay} ~ ${endDay}`}</p>
        </div>
      </div>
    </ConfirmPlanLayout>
  );
}
