import styles from './detailCard.module.css';
import { DayListCard } from '../../diary/types/DiaryTypes';
import { getCategoryStyle } from '../../../data/categoryStyle';

export default function DayListContent({ card }: { card: DayListCard }) {
  return (
    <div className={styles.dayListContainer}>
      {card.planDetailList.map((item, idx: number) => {
        return (
          <main key={idx} className={styles.dayListBox}>
            <div className={styles.orderBox}>
              <div
                className={styles.orderCircle}
                style={{
                  backgroundColor: getCategoryStyle(item.contentType).color,
                }}
              >
                {idx + 1}
              </div>
              <div className={styles.orderLine}></div>
              {idx === card.planDetailList.length - 1 ? (
                <div className={styles.closeCircle}></div>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.textContent}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.address}>{item.address}</p>
              <div className={styles.contentTypeBox}>
                <img
                  src={getCategoryStyle(item.contentType).icon}
                  alt="category-icon"
                  className={styles.contentIcon}
                />
                <p
                  className={styles.content}
                  style={{ color: getCategoryStyle(item.contentType).color }}
                >
                  {item.contentType}
                </p>
              </div>
            </div>
            <section className={styles.imgBox}>
              <img src={item.image} className={styles.img} alt="spot-image" />
            </section>
          </main>
        );
      })}
    </div>
  );
}
