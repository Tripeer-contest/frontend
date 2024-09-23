import styles from '../modules/skeletonRecommendationBanner.module.css';
import SkeletonPlaceBox from './SkeletonPlaceBox.tsx';
const SkeletonRecommendationBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}></div>
      <section className={styles.section}>
        <SkeletonPlaceBox />
        <SkeletonPlaceBox />
        <SkeletonPlaceBox />
      </section>
    </div>
  );
};
export default SkeletonRecommendationBanner;
