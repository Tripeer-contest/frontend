import useAnimation from "../hook/useAnimation"
import { useRef } from "react"
import styles from "./photoSlide.module.css"
import slideImg1 from "../../../assets/pictures/slideImg1.webp"
import slideImg2 from "../../../assets/pictures/slideImg2.webp"
import slideImg3 from "../../../assets/pictures/slideImg3.webp"
import slideImg4 from "../../../assets/pictures/slideImg4.webp"
import slideImg5 from "../../../assets/pictures/slideImg5.webp"
import slideImg6 from "../../../assets/pictures/slideImg6.webp"


export default function PhotoSlide(): JSX.Element{
    const titleRef = useRef<null | HTMLHeadingElement>(null)
    const subRef = useRef<null | HTMLHeadingElement>(null)

    useAnimation([titleRef,subRef])

    return(
        <main className={styles.container}>
            <section className={styles.box1}>
                <article className={styles.titleBox}>
                    <h2 className={styles.subTitle} ref={subRef}>친구, 가족과 함께하는 여행 계획을 이제 쉽고 편하게</h2>
                    <h1 className={styles.title} ref={titleRef}>모든 일정을 한 눈에,<br/> 당신과 동료의 완벽한 여행 파트너</h1>
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