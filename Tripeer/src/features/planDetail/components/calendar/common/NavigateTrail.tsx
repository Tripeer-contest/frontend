import styles from '../../../assets/calendar/common/nav.module.css';

export default function NavigateTrail() {
  return (
    <div className={styles.trail}>
      {[1, 2, 3].map((num) => (
        <div className={styles.dot} key={num} />
      ))}
    </div>
  );
}
