import styles from '../modules/skeletonPlaceBox.module.css';

const SkeletonPlaceBox = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgBox} />
      <section className={styles.description}>
        <div className={styles.box1} />
        <div className={styles.box2} />
        <div className={styles.box3} />
        <div className={styles.box4} />
      </section>
    </div>
  );
};

export default SkeletonPlaceBox;
