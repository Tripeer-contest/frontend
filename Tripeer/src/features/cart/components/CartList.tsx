import MainCard, {
  wishItemToItemInfo,
} from '../../../components/Card/MainCard';
import styles from '../asset/list.module.css';
import EmptyCart from './EmptyCart';
import { Fragment } from 'react/jsx-runtime';
import { wishItem } from '../types/wishListItem';
import useCategoryFilter from '../hooks/useCategoryFilter';
import TripeerRecommends from '../../../components/empty/TripeerRecommends';
import useWishListLike from '../hooks/useWIshListLike';
import zustandStore from '../../../store/store';
import { useNavigate } from 'react-router-dom';

export default function CartList({ items }: { items: wishItem[] }) {
  const setPrev = zustandStore((state) => state.spot_setPrevPage);
  const navigate = useNavigate();
  const filteredItem = useCategoryFilter(items);
  const mutation = useWishListLike();

  const clickHandler = (id: number) => {
    setPrev('/cart');
    navigate(`/home/spot/${id}`);
  };

  return (
    <>
      {filteredItem.length === 0 && (
        <>
          <EmptyCart />
          <TripeerRecommends />
        </>
      )}
      <div className={styles.container}>
        {filteredItem.map((item, idx) => {
          return (
            <Fragment key={idx}>
              <div className={styles.cardBox}>
                <MainCard
                  itemInfo={wishItemToItemInfo(item)}
                  itemClickHandler={() => clickHandler(item.spotInfoId)}
                  heartClickHandler={() =>
                    mutation.mutate({
                      id: item.spotInfoId,
                      like: item.like,
                    })
                  }
                />
              </div>
              <div className={styles.line} />
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
