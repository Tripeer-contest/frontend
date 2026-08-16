import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../../store/store';
import useParamsId from '../../../../spot/hooks/useParamsId';
import {
  useGetPlanSpotNowSearchQuery,
  usePlanSpotNowLikeQuery,
} from '../../../hooks/useGetPlanSpotSearch';
import useIntersectionScroll from '../../../../../hooks/useIntersectionScroll';
import { PlanSearchSpotInterface } from '../../../../../types/PlaceType';
import SearchSpotCard from '../search/SearchSpotCard';
import { Fragment } from 'react/jsx-runtime';
import styles from '../../../assets/map/mapNav/searchContent.module.css';

export default function SearchNowContent({ sortNum }: { sortNum: number }) {
  const id = useParamsId();
  const [keyword, bound] = zustandStore(
    useShallow((state) => [state.room_mapSearchKeyword, state.room_modeBound]),
  );

  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useGetPlanSpotNowSearchQuery(
      id,
      keyword,
      bound ? bound.minLat : 0,
      bound ? bound.maxLat : 0,
      bound ? bound.minLon : 0,
      bound ? bound.maxLon : 0,
      sortNum,
    );
  const { setRef } = useIntersectionScroll(fetchNextPage);
  const { mutate } = usePlanSpotNowLikeQuery(
    id,
    keyword,
    bound ? bound.minLat : 0,
    bound ? bound.maxLat : 0,
    bound ? bound.minLon : 0,
    bound ? bound.maxLon : 0,
    sortNum,
  );
  return (
    <>
      <div className={styles.container}>
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
        {!isLoading &&
          !isError &&
          data?.pages.length === 1 &&
          data?.pages[0].searchResultList.length === 0 && (
            <div
              style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#D9D9D9',
              }}
            >
              검색 결과가 없습니다.
            </div>
          )}
      </div>
    </>
  );
}
