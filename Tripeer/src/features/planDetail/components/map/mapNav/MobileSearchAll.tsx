import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../../store/store';
import useParamsId from '../../../../spot/hooks/useParamsId';
import SearchSpotCard from '../search/SearchSpotCard';
import useGetPlanSpotSearchQuery, {
  usePlanSpotLikeQuery,
} from '../../../hooks/useGetPlanSpotSearch';
import useIntersectionScroll from '../../../../../hooks/useIntersectionScroll';
import { PlanSearchSpotInterface } from '../../../../../types/PlaceType';
import { Fragment } from 'react/jsx-runtime';
import styles from '../../../assets/map/mapNav/mobileResult.module.css';

export default function MobileSearchAll({ sortNum }: { sortNum: number }) {
  const id = useParamsId();
  const [townInfo, townIdx] = zustandStore(
    useShallow((state) => [state.room_townList, state.room_selectedTownIdx]),
  );
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useGetPlanSpotSearchQuery(
      id,
      townInfo[townIdx].cityId,
      townInfo[townIdx].townId === 0 ? -1 : townInfo[townIdx].townId,
      '',
      sortNum,
    );
  const { setRef } = useIntersectionScroll(fetchNextPage);
  const { mutate } = usePlanSpotLikeQuery(
    id,
    townInfo[townIdx].cityId,
    townInfo[townIdx].townId === 0 ? -1 : townInfo[townIdx].townId,
    '',
    sortNum,
  );
  return (
    <>
      {!isLoading &&
        !isError &&
        data?.pages.map((page) =>
          page.searchResultList.map((result: PlanSearchSpotInterface) => (
            <Fragment key={result.spotInfoId}>
              <SearchSpotCard spot={result} mutate={mutate} />
            </Fragment>
          )),
        )}
      {!isLoading && hasNextPage && data?.pages.length && (
        <li className={styles.ballBox} ref={setRef}>
          <div className={styles.ball} />
          <div className={styles.ball} />
          <div className={styles.ball} />
        </li>
      )}
    </>
  );
}
