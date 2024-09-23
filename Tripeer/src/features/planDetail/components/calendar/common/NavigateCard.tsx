import { getCategoryStyle } from '../../../../../data/categoryStyle';
import { SpotYInterface } from '../../../../../store/room/RoomSliceState';
import styles from '../../../assets/calendar/common/nav.module.css';

export default function NavigateCard({
  item,
  idx,
}: {
  item: SpotYInterface;
  idx: number;
}) {
  const category = getCategoryStyle(item.contentType);
  return (
    <div className={styles.card}>
      <div
        className={styles.order}
        style={{
          backgroundColor: `${category.color}`,
        }}
      >
        {idx}
      </div>
      <div className={styles.placeString}>
        <p className={styles.placeTitle}>{item.title}</p>
        <p className={styles.placeAddress}>{item.addr}</p>
        <div className={styles.placeCategory}>
          <img src={category.icon} alt="category-icon" />
          <span style={{ color: `${category.color}` }}>{item.contentType}</span>
        </div>
      </div>
      <img src={item.img} alt="place-img" className={styles.placeImg} />
    </div>
  );
}
