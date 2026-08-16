import styles from '../../../assets/map/mapNav/searchContent.module.css';
import mapIcon from '../../../../../assets/button/mapIcon_gray.svg';
import likeIcon from '../../../../../assets/button/full_heart.svg';
import unlikeIcon from '../../../../../assets/button/heart_empty.svg';
import { PlanSearchSpotInterface } from '../../../../../types/PlaceType';
import { truncateText } from '../../../../../utils/utilString';
import { getCategoryStyle } from '../../../../../data/categoryStyle';
import useShowMarkerInBound from '../../../hooks/useShowMarkerInBound';
import useIsSpotInSpotList from '../../../hooks/useIsSpotInSpotList';
import zustandStore from '../../../../../store/store';
import { handleErrorImg } from '../../../../../data/defaultImg';

export default function SearchSpotCard({
  spot,
  mutate,
}: {
  spot: PlanSearchSpotInterface;
  mutate: ({ id, like }: { like: boolean; id: number }) => void;
}) {
  const likeHandler = () => {
    mutate({ id: spot.spotInfoId, like: spot.wishlist });
  };
  const setSpot = zustandStore((state) => state.room_setSpotInfo);
  const { addSpot, isExist, removeSpot } = useIsSpotInSpotList(spot);
  const clickEvent = () => {
    setSpot({
      spotInfoId: spot.spotInfoId,
      longitude: spot.longitude,
      latitude: spot.latitude,
    });
  };
  useShowMarkerInBound(spot);
  return (
    <div className={styles.cardBox} onClick={clickEvent}>
      <img
        src={spot.img}
        className={styles.cardImg}
        alt="spot-img"
        onError={handleErrorImg}
      />
      <div className={styles.cardContentBox}>
        <div className={styles.cardTopContent}>
          <p className={styles.spotTitle}>{truncateText(spot.title, 15)}</p>
          <div className={styles.contentTypeBox}>
            <img
              src={getCategoryStyle(spot.contentType).icon}
              className={styles.contentTypeIcon}
            />
            <p
              className={styles.contentTypeText}
              style={{ color: getCategoryStyle(spot.contentType).color }}
            >
              {spot.contentType}
            </p>
          </div>
        </div>
        <div className={styles.addrBox}>
          <img src={mapIcon} alt="address-icon" className={styles.addrIcon} />
          <p className={styles.addrText}>{truncateText(spot.addr, 23)}</p>
        </div>
        <div className={styles.line}></div>
        <div className={styles.cardBotContent}>
          <div
            className={styles.likeBtnBox}
            onClick={(e) => {
              e.stopPropagation();
              likeHandler();
            }}
          >
            {spot.wishlist ? (
              <img
                src={likeIcon}
                className={styles.likeIcon}
                alt="unlike-btn"
              />
            ) : (
              <img
                src={unlikeIcon}
                className={styles.likeIcon}
                alt="unlike-btn"
              />
            )}
          </div>
          {isExist ? (
            <div
              className={styles.removeBucketBtn}
              onClick={(e) => {
                e.stopPropagation();
                removeSpot();
              }}
            >
              선택 취소
            </div>
          ) : (
            <div
              className={styles.addBucketBtn}
              onClick={(e) => {
                e.stopPropagation();
                addSpot();
              }}
            >
              여행지 추가
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
