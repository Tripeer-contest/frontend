import { Suspense, useEffect } from 'react';
import zustandStore from '../../../../../store/store';
import SpotHeader from '../../../../spot/components/SpotHeader';
import ErrorBoundary from '../../../../../components/error/ErrorBoundary';
import SpotShortInfo from '../../../../spot/components/SpotShortInfo';
import SpotMap from '../../../../spot/components/SpotMap';
import SpotLine from '../../../../spot/components/SpotLine';
import { SpotReview } from '../../../../spot/components/SpotReview';
import SpotMeta from '../../../../spot/components/SpotMeta';
import SmallLoading from '../../../../../components/loading/SmallLoading';
import { useShallow } from 'zustand/react/shallow';

export default function MapMobileModal() {
  const [spotInfo, moveMap, makeMarker, removeMarker] = zustandStore(
    useShallow((state) => [
      state.room_spotInfo,
      state.room_moveMap,
      state.room_makeMarkerBySpot,
      state.room_removeMarkerBySpot,
    ]),
  );

  useEffect(() => {
    if (spotInfo) {
      moveMap && moveMap(spotInfo.latitude, spotInfo.longitude);
      makeMarker && makeMarker(spotInfo);
    }
    return () => {
      if (spotInfo) removeMarker && removeMarker(spotInfo.spotInfoId);
    };
  }, [spotInfo, moveMap, makeMarker, removeMarker]);

  return (
    <ErrorBoundary fallback={<p>끄악</p>}>
      <Suspense
        fallback={
          <div
            style={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SmallLoading />
          </div>
        }
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            height: '100%',
          }}
        >
          <SpotHeader
            isPrevPage={false}
            id={spotInfo ? spotInfo.spotInfoId : 0}
          />
          <SpotShortInfo
            scrollToReview={() => {}}
            id={spotInfo ? spotInfo.spotInfoId : 0}
            mode={false}
          />
          <SpotLine />
          <SpotMap id={spotInfo ? spotInfo.spotInfoId : 0} />
          <SpotLine />
          <SpotReview
            ref={() => {}}
            scrollToReview={() => {}}
            id={spotInfo ? spotInfo.spotInfoId : 0}
            mode={false}
          />
          <SpotMeta id={spotInfo ? spotInfo.spotInfoId : 0} />
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
