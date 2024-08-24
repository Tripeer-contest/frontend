import styles from './diaryCards.module.css';
import data from '../data/dummyData';
import moreBtn from '../../../assets/button/more.svg';
import userIcon from '../../../assets/button/user.svg';

export default function DiaryCards() {
  const diaryData = data;

  return (
    <main className={styles.cardsBox}>
      {diaryData.map((item, idx) => {
        return (
          <div className={styles.diaryCard} key={idx}>
            <img className={styles.topMoreBtn} src={moreBtn} alt="moreBtn" />
            <div className={styles.cardImg}></div>
            <div className={styles.cardTextBox}>
              <div className={styles.topBox}>
                <p className={styles.title}>{item.title}</p>
                <img className={styles.moreBtn} src={moreBtn} alt="moreBtn" />
              </div>
              <div className={styles.centerBox}>
                <p className={styles.topSubtitle}>{item.location}</p>
                <div className={styles.bottomBox}>
                  <p>
                    {item.date}
                    <span>, {item.member ? item.member.length : 0}명</span>
                  </p>
                </div>
                <p className={styles.bottomSubtitle}>{item.location}</p>
                <div className={styles.detailBtn}>
                  <p className={styles.detailText}>상세보기</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}
