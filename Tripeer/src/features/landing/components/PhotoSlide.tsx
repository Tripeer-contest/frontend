import styles from "./photoSlide.module.css"
import slideImg1 from "../../../assets/pictures/slideImg1.png"
import slideImg2 from "../../../assets/pictures/slideImg2.png"
import slideImg3 from "../../../assets/pictures/slideImg3.png"
import slideImg4 from "../../../assets/pictures/slideImg4.png"
import slideImg5 from "../../../assets/pictures/slideImg5.png"
import slideImg6 from "../../../assets/pictures/slideImg6.png"


export default function PhotoSlide(): JSX.Element{
    return(
        <main className={styles.container}>
            <section className={styles.box1}>
                <article className={styles.titleBox}>
                    <h2 className={styles.subTitle}>친구, 가족과 함께하는 여행 계획을 이제 쉽고 편하게</h2>
                    <h1 className={styles.title}>모든 일정을 한 눈에,<br/> 당신과 동료의 완벽한 여행 파트너</h1>
                </article>
            </section>
            <figure className={styles.slider}>
                <div className={styles.slideTrack}>
                    {[slideImg1,slideImg2,slideImg3,slideImg4,slideImg5,slideImg6,slideImg1,slideImg2,slideImg3,slideImg4,slideImg5,slideImg6].map((item, idx) =>{
                        return (
                            <div className={styles.slide} key={idx}>
                                <img src={item} alt={item} className={styles.slideImg}/>
                            </div>
                        )
                    })                
                    }
                </div>
            </figure>
        </main>
    )
}