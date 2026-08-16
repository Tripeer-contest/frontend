import { Suspense } from 'react';
import ErrorBoundary from '../../../../../components/error/ErrorBoundary';
import ErrorPage from '../../../../../components/error/ErrorPage';
import zustandStore from '../../../../../store/store';
import BottomDragModal from '../../common/BottomDragModal';
import SmallLoading from '../../../../../components/loading/SmallLoading';
import SpotHeader from '../../../../spot/components/SpotHeader';
import SpotShortInfo from '../../../../spot/components/SpotShortInfo';
import SpotLine from '../../../../spot/components/SpotLine';
import SpotMap from '../../../../spot/components/SpotMap';
import { SpotReview } from '../../../../spot/components/SpotReview';
import SpotMeta from '../../../../spot/components/SpotMeta';
import styles from '../../../assets/map/mapNav/mobileDetail.module.css';
import { useShallow } from 'zustand/react/shallow';
import cancel_icon from '../../../../../assets/button/cancel_gray.svg';

export default function RecommendMobileDetail() {
  const [spotInfo, setSpotInfo] = zustandStore(
    useShallow((state) => [state.room_spotInfo, state.room_setSpotInfo]),
  );
  return (
    <>
      {spotInfo && (
        <>
          <div className={styles.dark}>
            <div className={styles.spotBox}>
              <div
                className={styles.spotIconBox}
                onClick={() => setSpotInfo(null)}
              >
                <img
                  src={cancel_icon}
                  className={styles.cancelIcon}
                  alt="cancel-icon"
                />
              </div>
            </div>
          </div>
          <BottomDragModal>
            <ErrorBoundary fallback={<ErrorPage />}>
              <Suspense
                fallback={
                  <div className={styles.suspenseBox}>
                    <SmallLoading />
                  </div>
                }
              >
                <div className={styles.itemContainer}>
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
          </BottomDragModal>
        </>
      )}
    </>
  );
}
