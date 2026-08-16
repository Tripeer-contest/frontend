import styles from './assets/skeleton.module.css';

export default function PlanSearchSkeleton() {
  return (
    <div className={styles.cardBox}>
      <div className={styles.cardImg} />
      <div className={styles.cardContentBox}>
        <div className={styles.cardTopContent}>
          <p className={styles.spotTitle}></p>
          <div className={styles.contentTypeBox}>
            <p className={styles.contentTypeText}></p>
          </div>
        </div>
        <div className={styles.addrBox}>
          <p className={styles.addrText}></p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.cardBotContent}>
          <div className={styles.likeBtnBox}></div>
          <div className={styles.addBucketBtn}></div>
        </div>
      </div>
    </div>
  );
}
