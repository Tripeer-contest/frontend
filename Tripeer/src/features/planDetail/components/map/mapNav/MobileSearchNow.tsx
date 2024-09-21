import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../../store/store';
import useParamsId from '../../../../spot/hooks/useParamsId';
import { Fragment, useEffect, useState } from 'react';
import SearchSpotCard from '../search/SearchSpotCard';
import { PlanSearchSpotInterface } from '../../../../../types/PlaceType';
import styles from '../../../assets/map/mapNav/mobileResult.module.css';
import {
  useGetPlanSpotNowSearchQuery,
  usePlanSpotNowLikeQuery,
} from '../../../hooks/useGetPlanSpotSearch';
import useIntersectionScroll from '../../../../../hooks/useIntersectionScroll';
import refresh_icon from '../../../../../assets/button/refresh.svg';

export default function MobileSearchNow({
  sortNum,
  keyword,
}: {
  sortNum: number;
  keyword: string;
}) {
  const id = useParamsId();
  const [refresh, setRefresh] = useState(false);
  const [minLat, maxLat, minLon, maxLon] = zustandStore(
    useShallow((state) => [
      state.room_minLat,
      state.room_maxLat,
      state.room_minLon,
      state.room_maxLon,
    ]),
  );
  const [bound, setBound] = useState({
    minLat,
    maxLat,
    minLon,
    maxLon,
  });
  const { data, fetchNextPage, hasNextPage, isError, isLoading } =
    useGetPlanSpotNowSearchQuery(
      id,
      keyword,
      bound.minLat,
      bound.maxLat,
      bound.minLon,
      bound.maxLon,
      sortNum,
    );
  const { mutate } = usePlanSpotNowLikeQuery(
    id,
    keyword,
    bound.minLat,
    bound.maxLat,
    bound.minLon,
    bound.maxLon,
    sortNum,
  );
  const { setRef } = useIntersectionScroll(fetchNextPage);

  const refershHandler = () => {
    setBound({
      maxLat,
      maxLon,
      minLat,
      minLon,
    });
  };

  useEffect(() => {
    if (
      bound.minLat !== minLat ||
      bound.maxLat !== maxLat ||
      bound.minLon !== minLon ||
      bound.maxLon !== maxLon
    ) {
      setRefresh(true);
    } else {
      setRefresh(false);
    }
  }, [minLat, maxLat, minLon, maxLon, bound]);

  return (
    <>
      {refresh && (
        <div className={styles.refreshBtn} onClick={refershHandler}>
          <img src={refresh_icon} alt="refresh-btn" />현 위치에서 검색
        </div>
      )}
      {!isError &&
        data?.pages.map((page) =>
          page.searchResultList.map((result: PlanSearchSpotInterface) => (
            <Fragment key={result.spotInfoId}>
              <SearchSpotCard spot={result} mutate={mutate} />
            </Fragment>
          )),
        )}
      {!isError &&
        data?.pages.length === 1 &&
        data.pages[0].searchResultList.length === 0 && (
          <div
            style={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#D9D9D9',
            }}
          >
            검색 결과가 없습니다.
          </div>
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
