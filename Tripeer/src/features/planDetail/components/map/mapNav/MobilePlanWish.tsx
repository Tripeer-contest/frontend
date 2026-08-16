import { Fragment } from 'react/jsx-runtime';
import { PlanSearchSpotInterface } from '../../../../../types/PlaceType';
import useParamsId from '../../../../spot/hooks/useParamsId';
import {
  useGetPlanWishQuery,
  usePostPlanWishQuery,
} from '../../../hooks/usePlanWishQuery';
import SearchSpotCard from '../search/SearchSpotCard';

export default function MobilePlanWish() {
  const id = useParamsId();
  const { data } = useGetPlanWishQuery(id);
  const { mutate } = usePostPlanWishQuery(id);
  return (
    <>
      {data.map((item: PlanSearchSpotInterface) => (
        <Fragment key={item.spotInfoId}>
          <SearchSpotCard spot={item} mutate={mutate} />
        </Fragment>
      ))}
      {data && data.length === 0 && (
        <div
          style={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#D9D9D9',
          }}
        >
          이번 계획 아직 좋아하시는 장소가 없습니다.
        </div>
      )}
    </>
  );
}
