import styles from '../../assets/search.module.css';
import cancelIcon from '../../../../assets/button/cancel.svg';
import zustandStore from '../../../../store/store';

export default function SaveSpot() {
  const { spots, removeSpot } = zustandStore();
  return (
    <div className={styles.saveSpot}>
      <h5 className={styles.saveTitle}>추가된 여행지</h5>
      <ul className={styles.spotBox}>
        {spots.map((spot) => {
          return (
            <li className={styles.saveList} key={spot.idx}>
              <span>{spot.name}</span>
              <img
                src={cancelIcon}
                alt="cancel-icon"
                className={styles.cancelIcon}
                onClick={() => removeSpot(spot)}
              />
            </li>
          );
        })}
      </ul>
      {spots.length === 0 && (
        <p className={styles.emptySpot}>아직 추가된 여행지가 없습니다.</p>
      )}
    </div>
  );
}
