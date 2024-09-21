import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../../store/store';
import useParamsId from '../../../../spot/hooks/useParamsId';
import styles from '../../../assets/map/mapNav/searchContent.module.css';
import useGetPlanSpotSearchQuery, {
  usePlanSpotLikeQuery,
} from '../../../hooks/useGetPlanSpotSearch';
import SearchSpotCard from './SearchSpotCard';
import { Fragment } from 'react/jsx-runtime';
import { PlanSearchSpotInterface } from '../../../../../types/PlaceType';
import useIntersectionScroll from '../../../../../hooks/useIntersectionScroll';

export default function SearchMainContent({ sortNum }: { sortNum: number }) {
  const id = useParamsId();
  const [townInfo, townIdx, searchKeyword] = zustandStore(
    useShallow((state) => [
      state.room_townList,
      state.room_selectedTownIdx,
      state.room_mapSearchKeyword,
    ]),
  );
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useGetPlanSpotSearchQuery(
      id,
      townInfo[townIdx].cityId,
      townInfo[townIdx].townId === 0 ? -1 : townInfo[townIdx].townId,
      searchKeyword,
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
  );
}
