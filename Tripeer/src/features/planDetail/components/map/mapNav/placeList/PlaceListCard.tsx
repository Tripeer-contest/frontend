import styles from '../../../../assets/map/mapNav/placeListContent.module.css';
import closeIcon from '../../../../../../assets/button/cancel_whiteGray.svg';
import mapIcon from '../../../../../../assets/button/mapIcon_gray.svg';
import { getCategoryStyle } from '../../../../../../data/categoryStyle';
import { SpotYInterface } from '../../../../../../store/room/RoomSliceState';
import useIsSpotInSpotList from '../../../../hooks/useIsSpotInSpotList';
import zustandStore from '../../../../../../store/store';

export default function PlaceListCard({
  spotInfo,
}: {
  spotInfo: SpotYInterface;
}) {
  const setSpot = zustandStore((state) => state.room_setSpotInfo);
  const { removeSpot } = useIsSpotInSpotList(spotInfo);
  return (
    <div
      className={styles.cardBox}
      onClick={() =>
        setSpot({
          latitude: spotInfo.latitude,
          longitude: spotInfo.longitude,
          spotInfoId: spotInfo.spotInfoId,
        })
      }
    >
      <img className={styles.cardImg} src={spotInfo.img} alt="place-img" />
      <section className={styles.cardSection}>
        <div className={styles.cardTopSection}>
          <div className={styles.spotTitle}>{spotInfo.title}</div>
          <img
            src={closeIcon}
            className={styles.closeIcon}
            alt="delete-Btn"
            onClick={(e) => {
              e.stopPropagation();
              removeSpot();
            }}
          />
        </div>
        <div className={styles.cardMiddleSection}>
          <img className={styles.mapIcon} src={mapIcon} alt="map-icon" />
          <p className={styles.address}>{spotInfo.addr}</p>
        </div>
        <div className={styles.cardBottomSection}>
          <div className={styles.contentTypeBox}>
            <img
              src={getCategoryStyle(spotInfo.contentType).icon}
              alt="category-icon"
              className={styles.contentIcon}
            />
            <p
              className={styles.content}
              style={{ color: getCategoryStyle(spotInfo.contentType).color }}
            >
              {spotInfo.contentType}
            </p>
          </div>
          <img
            src={spotInfo.profileImage}
            className={styles.userImg}
            alt="user-img"
          />
        </div>
      </section>
    </div>
  );
}
