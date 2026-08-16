import styles from '../modules/homeBanner.module.css';
import HomeCityBanner from './HomeCityBanner.tsx';
import HomeCategoryChips from './HomeCategoryChips.tsx';
import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store.tsx';
import { placeCategory as categoryList } from '../../../data/placeCategory.ts';

const HomeBanner = () => {
  const [h_townList] = zustandStore(useShallow((state) => [state.h_townList]));

  return (
    <div className={styles.container}>
      <HomeCityBanner />
      <HomeCategoryChips title={'지역별'} arr={h_townList} type={'town'} />
      <HomeCategoryChips
        title={'카테고리별'}
        arr={categoryList}
        type={'category'}
      />
    </div>
  );
};

export default HomeBanner;
