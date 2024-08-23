import styles from "./diaryCards.module.css"

export default function DiaryCards(){
    return(
        <main className={styles.cardsBox}>
            <div className={styles.diaryCard}>1</div>
            <div className={styles.diaryCard}>2</div>
            <div className={styles.diaryCard}>3</div>
        </main>
    )
}