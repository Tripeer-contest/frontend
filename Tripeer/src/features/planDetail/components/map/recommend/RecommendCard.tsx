import styles from '../../../assets/map/mapNav/recommend.module.css';
import mapIcon from '../../../../../assets/button/mapIcon_gray.svg';
import heartIcon from '../../../../../assets/button/heart_empty.svg';
import { SpotInterface } from '../../../../../types/PlanDetailTypes';
import { useRecommendLikeQuery } from '../../../hooks/useGetRecommend';
import zustandStore from '../../../../../store/store';
import useParamsId from '../../../../spot/hooks/useParamsId';
import { useShallow } from 'zustand/react/shallow';
import fullHeartIcon from '../../../../../assets/button/full_heart.svg';
import useShowMarkerInBound from '../../../hooks/useShowMarkerInBound';
import useIsSpotInSpotList from '../../../hooks/useIsSpotInSpotList';
import { handleErrorImg } from '../../../../../data/defaultImg';

export default function RecommendCard({ card }: { card: SpotInterface }) {
  const id = useParamsId();
  const [townList, townIdx, setSpot] = zustandStore(
    useShallow((state) => [
      state.room_townList,
      state.room_selectedTownIdx,
      state.room_setSpotInfo,
    ]),
  );
  const { addSpot, isExist, removeSpot } = useIsSpotInSpotList(card);

  const { mutate } = useRecommendLikeQuery(
    id,
    townList[townIdx].cityId,
    townList[townIdx].townId,
  );
  useShowMarkerInBound(card);
  const likeHandler = () => {
    mutate({ id: cardInfo.spotInfoId, like: cardInfo.wishlist });
  };

  const clickEvent = () => {
    window.innerWidth > 1000 &&
      setSpot({
        spotInfoId: card.spotInfoId,
        longitude: card.longitude,
        latitude: card.latitude,
      });
  };

  const cardInfo = card;

  return (
    <div className={styles.cardBox} onClick={clickEvent}>
      <img
        src={cardInfo.img}
        alt="spot-img"
        className={styles.cardImg}
        onError={handleErrorImg}
      />
      <p className={styles.placeName}>{cardInfo.title}</p>
      <div className={styles.addressBox}>
        <img src={mapIcon} className={styles.addressIcon} alt="map-icon" />
        <p className={styles.addressText}>{cardInfo.addr}</p>
      </div>
      <section className={styles.bottomSection}>
        <div
          className={styles.likeIconBox}
          onClick={(e) => {
            e.stopPropagation();
            likeHandler();
          }}
        >
          {cardInfo.wishlist ? (
            <img
              src={fullHeartIcon}
              className={styles.likeIcon}
              alt="like-icon"
            />
          ) : (
            <img
              src={heartIcon}
              className={styles.likeIcon}
              alt="unlike-icon"
            />
          )}
        </div>
        {!isExist ? (
          <div
            className={styles.addPlaceListBtn}
            onClick={(e) => {
              e.stopPropagation();
              addSpot();
            }}
          >
            여행지 추가
          </div>
        ) : (
          <div
            className={styles.removePlaceListBtn}
            onClick={(e) => {
              e.stopPropagation();
              removeSpot();
            }}
          >
            선택 취소
          </div>
        )}
      </section>
    </div>
  );
}
