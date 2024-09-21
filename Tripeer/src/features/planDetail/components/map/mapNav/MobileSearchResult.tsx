import { Suspense } from 'react';
import styles from '../../../assets/map/mapNav/mobileResult.module.css';
import MobileSearchAll from './MobileSearchAll';
import ErrorBoundary from '../../../../../components/error/ErrorBoundary';
import SkeletonSearch from '../../../../../components/loading/SkeletonSearch';
import MobileSearchNow from './MobileSearchNow';

export default function MobileSearchResult({
  searchMode,
  sortNum,
  keyword,
}: {
  searchMode: number;
  sortNum: number;
  keyword: string;
}) {
  return (
    <div className={styles.container}>
      {searchMode === 0 && (
        <ErrorBoundary fallback={<div>네트워크가 원할하지 않습니다.</div>}>
          <Suspense fallback={<SkeletonSearch />}>
            <MobileSearchAll sortNum={sortNum} keyword={keyword} />
          </Suspense>
        </ErrorBoundary>
      )}
      {searchMode === 1 && (
        <ErrorBoundary fallback={<div>네트워크가 원할하지 않습니다.</div>}>
          <Suspense fallback={<SkeletonSearch />}>
            <MobileSearchNow sortNum={sortNum} keyword={keyword} />
          </Suspense>
        </ErrorBoundary>
      )}
    </div>
  );
}
