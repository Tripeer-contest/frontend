import styles from './homePage.module.css';
import SearchBanner from './components/SearchBanner.tsx';
import ContentLayout from '../../layout/ContentLayout.tsx';
import HomeBanner from './components/HomeBanner.tsx';
import BoxLayout from '../../layout/BoxLayout.tsx';

export default function HomePage() {
  return (
    <BoxLayout>
      <div className={styles.container}>
        <SearchBanner />
        <ContentLayout>
          <HomeBanner />
        </ContentLayout>
      </div>
    </BoxLayout>
  );
}
