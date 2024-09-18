import styles from './homePage.module.css';
import ContentLayout from '../../layout/ContentLayout.tsx';
import HomeBanner from './components/HomeBanner.tsx';
import BoxLayout from '../../layout/BoxLayout.tsx';
import HomeRecommendationBanner from './components/HomeRecommendationBanner.tsx';
import HomePlaceBanner from './components/HomePlaceBanner.tsx';

export default function HomePage() {
  return (
    <BoxLayout>
      <ContentLayout>
        <div className={styles.container}>
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
