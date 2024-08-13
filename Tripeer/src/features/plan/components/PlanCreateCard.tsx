import styles from '../assets/create.module.css';
import plusIcon from '../assets/plus_icon.svg';

export default function PlanCreateCard({ open }: { open: () => void }) {
  return (
    <div className={styles.card} onClick={open}>
      <div className={styles.plusIcon}>
        <img src={plusIcon} alt="plus-icon" />
      </div>
      <p className={styles.content}>계획 추가하기</p>
    </div>
  );
}
