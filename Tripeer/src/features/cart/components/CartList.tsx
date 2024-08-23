import MainCard from '../../../components/Card/MainCard';
import styles from '../asset/list.module.css';
import { ItemInfo, UserInfo } from '../../../types/ItemTypes';
import EmptyCart from './EmptyCart';
import { Fragment } from 'react/jsx-runtime';
import { wishItem } from '../types/wishListItem';

export default function CartList({ items }: { items: wishItem[] }) {
  console.log(items);
  const itemInfo: ItemInfo = {
    itemName: '밀락 더 마켓',
    categoryName: '맛집',
    location: '부산 수영구 민락수변로17번길 56',
    img: 'https://blog.kakaocdn.net/dn/WLEmn/btrHZDXowGD/PEyB43YHvM0WI6CgnKmy30/img.jpg',
    rating: 4.5,
  };

  const userInfo: UserInfo = {
    isLike: false,
  };

  return (
    <>
      <EmptyCart />
      <div className={styles.container}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
          return (
            <Fragment key={item}>
              <div className={styles.cardBox}>
                <MainCard itemInfo={itemInfo} userInfo={userInfo} />
              </div>
              <div className={styles.line} />
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
