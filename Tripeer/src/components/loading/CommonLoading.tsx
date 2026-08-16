import styles from './assets/loading.module.css';

export default function CommonLoading() {
  return (
    <div className={styles.container}>
      <div className={styles.ball} />
      <div className={styles.ball} />
      <div className={styles.ball} />
    </div>
  );
}
