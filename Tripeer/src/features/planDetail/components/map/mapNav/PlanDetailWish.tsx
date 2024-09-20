import { Fragment } from 'react/jsx-runtime';
import { PlanSearchSpotInterface } from '../../../../../types/PlaceType';
import useParamsId from '../../../../spot/hooks/useParamsId';
import styles from '../../../assets/map/mapNav/searchContent.module.css';
import {
  useGetPlanWishQuery,
  usePostPlanWishQuery,
} from '../../../hooks/usePlanWishQuery';
import SearchSpotCard from '../search/SearchSpotCard';

export default function PlanDetailWish() {
  const id = useParamsId();
  const { data } = useGetPlanWishQuery(id);
  const { mutate } = usePostPlanWishQuery(id);
  return (
    <div className={styles.container}>
      {data.map((item: PlanSearchSpotInterface) => (
        <Fragment key={item.spotInfoId}>
          <SearchSpotCard spot={item} mutate={mutate}></SearchSpotCard>
        </Fragment>
      ))}
    </div>
  );
}
