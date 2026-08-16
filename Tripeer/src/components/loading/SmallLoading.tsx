import styles from './assets/loading.module.css';

export default function SmallLoading() {
  return (
    <div className={styles.smallContainer}>
      <div className={styles.ball} />
      <div className={styles.ball} />
      <div className={styles.ball} />
    </div>
  );
}
