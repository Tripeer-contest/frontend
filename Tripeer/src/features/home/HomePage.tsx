import styles from './homePage.module.css';
import SearchBanner from './components/SearchBanner.tsx';
import ContentLayout from '../../layout/ContentLayout.tsx';
import HomeBanner from './components/HomeBanner.tsx';
import BoxLayout from '../../layout/BoxLayout.tsx';
import HomeRecommendationBanner from './components/HomeRecommendationBanner.tsx';

export default function HomePage() {
  return (
    <BoxLayout>
      <div className={styles.container}>
        <SearchBanner />
        <ContentLayout>
          <p className={styles.title}>취향에 맞는 여행지를 찾아보세요</p>
          <HomeBanner />
          <HomeRecommendationBanner title={'호텔을'} />
          <HomeRecommendationBanner title={'호텔을'} />
        </ContentLayout>
      </div>
    </BoxLayout>
  );
}
