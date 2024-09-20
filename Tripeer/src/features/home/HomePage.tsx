import styles from './homePage.module.css';
import ContentLayout from '../../layout/ContentLayout.tsx';
import HomeBanner from './components/HomeBanner.tsx';
import BoxLayout from '../../layout/BoxLayout.tsx';
import HomeRecommendationBanner from './components/HomeRecommendationBanner.tsx';
import HomePlaceBanner from './components/HomePlaceBanner.tsx';
import RecommendSlide from '../../components/empty/RecommendSlide.tsx';
import SearchBar from './components/SearchBar.tsx';

export default function HomePage() {
  return (
    <BoxLayout>
      <ContentLayout>
        <div className={styles.container}>
          <div className={styles.topSection}>
            <h1 className={styles.logoText}>
              <span className={styles.logoTextSpan}>T</span>
              <span>R</span>
              <span>I</span>
              <span>P</span>
              <span>E</span>
              <span>E</span>
              <span>R</span>
            </h1>
            <SearchBar />
          </div>
          <div className={styles.recommendBox}>
            <RecommendSlide />
          </div>
          <div>
            <p className={styles.title}>취향에 맞는 여행지를 찾아보세요.</p>
            <HomeBanner />
          </div>
          <HomeRecommendationBanner title={'호텔을'} />
          <HomeRecommendationBanner title={'호텔을'} />
          <HomePlaceBanner />
        </div>
      </ContentLayout>
    </BoxLayout>
  );
}
