import styles from '../modules/homeBanner.module.css';
import HomeCityBanner from './HomeCityBanner.tsx';
import HomeCategoryChips from './HomeCategoryChips.tsx';
import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store.tsx';

const HomeBanner = () => {
  const [h_townList] = zustandStore(useShallow((state) => [state.h_townList]));

  return (
    <div className={styles.container}>
      <p className={styles.title}>취향에 맞는 여행지를 찾아보세요</p>
      <HomeCityBanner />
      <HomeCategoryChips title={'지역별'} arr={h_townList} />
    </div>
  );
};

export default HomeBanner;
