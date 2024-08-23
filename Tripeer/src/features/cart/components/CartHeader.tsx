import 'swiper/css';

import styles from '../asset/header.module.css';
import RegionCategory from './RegionCategory';
import { RegionFilter } from '../../../data/RegionCategory';
import { useQueryClient } from '@tanstack/react-query';
import { wishListAPI } from '../types/wishListItem';

export default function CartHeader() {
  const queryClient = useQueryClient();
  const wishListApi: wishListAPI | undefined = queryClient.getQueryData([
    'wishList',
  ]);
  const regions = RegionFilter(wishListApi?.data);
  return (
    <header className={styles.header}>
      {regions.length > 0 ? (
        <>
          <h1 className={styles.title}>{'"잊지 말고 다시 확인해보세요"'}</h1>
          <RegionCategory category={regions} />
        </>
      ) : undefined}
    </header>
  );
}
