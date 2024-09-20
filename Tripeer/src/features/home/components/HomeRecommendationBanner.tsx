import styles from '../modules/homeRecommendationBanner.module.css';
import HomeSlide from './HomeSlide.tsx';

interface Props {
  title: string;
}

const HomeRecommendationBanner = ({ title }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <p className={styles.title}>{title} 즐겨찾는 당신을 위해</p>
        <section className={styles.readMoreSection}>
          <div className={styles.readMore}>더보기</div>
        </section>
      </div>
      <HomeSlide />
    </div>
  );
};

export default HomeRecommendationBanner;
