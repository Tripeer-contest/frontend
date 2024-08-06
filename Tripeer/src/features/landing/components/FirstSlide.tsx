import styles from "./firstSlide.module.css"

export default function FirstSlide(){

    return(
        <div className={styles.container}>
            <div className={styles.box1}>
                <div className={styles.titleBox}>
                <p className={styles.title}>함께 여행을, 함께 계획하다.</p>
                <p className={styles.title}>여행 협업 플랫폼</p>
                <p className={styles.subTitle}>여행 계획의 모든 것, 한곳에서 같이 계획하세요.</p>
                </div>
            </div>
            <div className={styles.box2}>
                <div className={styles.banner}></div>
            </div>
        </div>
    )
}