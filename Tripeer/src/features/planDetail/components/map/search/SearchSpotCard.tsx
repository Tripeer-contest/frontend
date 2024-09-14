import styles from '../../../assets/map/mapNav/searchContent.module.css';
import mapIcon from '../../../../../assets/button/mapIcon_gray.svg';
import likeIcon from '../../../../../assets/button/full_heart.svg';
import unlikeIcon from '../../../../../assets/button/heart_empty.svg';
import { PlanSearchSpotInterface } from '../../../../../types/PlaceType';
import { truncateText } from '../../../../../utils/utilString';
import { getCategoryStyle } from '../../../../../data/categoryStyle';

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
  return (
    <div className={styles.cardBox}>
      <img src={spot.img} className={styles.cardImg} alt="spot-img" />
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
          <div className={styles.likeBtnBox} onClick={likeHandler}>
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
          <div className={styles.addBucketBtn}>여행지 추가</div>
        </div>
      </div>
    </div>
  );
}
