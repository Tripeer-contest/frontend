import styles from './homePage.module.css';
import SearchBanner from './components/SearchBanner.tsx';
import ContentLayout from '../../layout/ContentLayout.tsx';
import HomeCategoryBanner from './components/HomeCategoryBanner.tsx';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <SearchBanner />
      <ContentLayout>
        <HomeCategoryBanner />
      </ContentLayout>
    </div>
  );
}
