import styles from '../modules/homeRecommendationBanner.module.css';
import HomeSlide from './HomeSlide.tsx';

interface Props {
  title: string;
}

const HomeRecommendationBanner = ({ title }: Props) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title} 즐겨찾는 당신을 위해</p>
      <section className={styles.readMoreSection}>
        <div className={styles.readMore}>더보기</div>
      </section>
      <HomeSlide />
    </div>
  );
};

export default HomeRecommendationBanner;
