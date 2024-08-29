import styles from '../modules/homeBanner.module.css';
import HomeCityBanner from './HomeCityBanner.tsx';
import HomeCategoryChips from './HomeCategoryChips.tsx';
import { useShallow } from 'zustand/react/shallow';
import useSticky from '../hooks/useSticky.tsx';
import zustandStore from '../../../store/store.tsx';
import { placeCategory as categoryList } from '../../../data/placeCategory.ts';

const HomeBanner = () => {
  const [h_townList] = zustandStore(useShallow((state) => [state.h_townList]));
  useSticky();

  return (
    <div className={styles.container}>
      <HomeCityBanner />
      <HomeCategoryChips title={'지역별'} arr={h_townList} />
      <HomeCategoryChips title={'카테고리별'} arr={categoryList} />
    </div>
  );
};

export default HomeBanner;
