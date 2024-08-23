import styles from "../diary.module.css"
import diaryBannerImg from "../../../assets/pictures/diaryBanner.png"

export default function DiaryBanner(){
    return(
        <div className={styles.bannerBox}>
            <img src={diaryBannerImg} className={styles.bannerImg} alt="diaryBannerImg" />
            <div className={styles.bannerTitleBox}>
                <h1>지나온 당신의</h1>
                <h1>여행을 기억합니다.</h1>
                <p>지나온 여행을 추억해 보아요.</p>
            </div>
        </div>
    )
}