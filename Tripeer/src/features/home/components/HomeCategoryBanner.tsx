import styles from '../modules/homeCategoryBanner.module.css';
import HomeCityBanner from './HomeCityBanner.tsx';

const HomeCategoryBanner = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>취향에 맞는 여행지를 찾아보세요</p>
      <HomeCityBanner />
    </div>
  );
};

export default HomeCategoryBanner;
