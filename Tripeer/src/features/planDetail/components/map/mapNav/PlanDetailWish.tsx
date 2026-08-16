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
      {data && data.length === 0 && (
        <div
          style={{
            height: '100%',
            width: '100%',
            color: '#D9D9D9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          이번 계획 아직 좋아하시는 장소가 없습니다.
        </div>
      )}
    </div>
  );
}
