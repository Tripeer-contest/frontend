import styles from './homePage.module.css';
import ContentLayout from '../../layout/ContentLayout.tsx';
import HomeBanner from './components/HomeBanner.tsx';
import BoxLayout from '../../layout/BoxLayout.tsx';
import HomeRecommendationBanner from './components/HomeRecommendationBanner.tsx';
import HomePlaceBanner from './components/HomePlaceBanner.tsx';
import RecommendSlide from '../../components/empty/RecommendSlide.tsx';
import SearchBar from './components/SearchBar.tsx';
import useFCM from '../../hooks/useFCM.tsx';
import useHomeRecommend from './hooks/useHomeRecommend.tsx';
import SkeletonRecommendationBanner from './components/SkeletonRecommendationBanner.tsx';
import { Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import Notify from '../planDetail/components/notify/Notify.tsx';

export default function HomePage() {
  const [isfirstAlert, setIsfirstAlert] = useState(false);
  const [issecondAlert, setIssecondAlert] = useState(false);
  const [isthirdAlert, setIsthirdAlert] = useState(false);

  useFCM(setIsfirstAlert, setIssecondAlert, setIsthirdAlert);
  const { recommendData } = useHomeRecommend();
  return (
    <BoxLayout>
      <Notify
        isActive={isfirstAlert}
        title="분기 1"
        message="으앙마ㅓㅍ아ㅣㅁ;ㄴ어피ㅏ"
      />
      <Notify
        isActive={issecondAlert}
        title="분기 2"
        message="으앙마ㅓㅍ아ㅣㅁ;ㄴ어피ㅏ"
      />
      <Notify
        isActive={isthirdAlert}
        title="분기 0"
        message="으앙마ㅓㅍ아ㅣㅁ;ㄴ어피ㅏ"
      />

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
          <div className={styles.filterBox}>
            <p className={styles.title}>취향에 맞는 여행지를 찾아보세요.</p>
            <HomeBanner />
          </div>

          {recommendData ? (
            <>
              {recommendData.map((data, idx) => (
                <Fragment key={idx}>
                  <HomeRecommendationBanner data={data} />
                </Fragment>
              ))}
            </>
          ) : (
            <>
              {[1, 2, 3].map((box: number) => {
                return (
                  <Fragment key={box}>
                    <SkeletonRecommendationBanner />
                  </Fragment>
                );
              })}
            </>
          )}

          <HomePlaceBanner />
        </div>
      </ContentLayout>
    </BoxLayout>
  );
}
