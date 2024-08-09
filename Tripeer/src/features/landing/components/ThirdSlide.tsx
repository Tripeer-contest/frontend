import useAnimation from "../hook/useAnimation"
import { useRef } from "react"
import styles from "./thirdSlide.module.css"

export default function ThirdSlide(): JSX.Element{
    const sectionRef = useRef<null | HTMLElement>(null)
    const bannerRef = useRef<null | HTMLDivElement>(null)

    useAnimation([sectionRef,bannerRef])

    return(
        <main className={styles.container}>
            <section className={styles.box1}>
                <section className={styles.titleContent} ref={sectionRef}>
                    <article className={styles.titleBox} >
                        <div className={styles.titleImg1}></div>
                        <div className={styles.titles}>
                            <h1 className={styles.title}>플랜생성</h1>
                            <p className={styles.subTitle}>여행하고 싶은 목적지를 설정하고,</p>
                            <p className={styles.subTitle}>일정을 선택하세요.</p>
                        </div>
                    </article>
                    <article className={styles.titleBox} >
                        <div className={styles.titleImg2}></div>
                        <div className={styles.titles}>
                            <h1 className={styles.title}>스팟선택</h1>
                            <p className={styles.subTitle}>가고 싶은 장소를 선택하고, </p>
                            <p className={styles.subTitle}>지도를 통해 친구들과 공유해 보세요.</p>
                        </div>
                    </article>
                    <article className={styles.titleBox} >
                        <div className={styles.titleImg3}></div>
                        <div className={styles.titles}>
                            <h1 className={styles.title}>플랜조정</h1>
                            <p className={styles.subTitle}>최단 거리로 추천 받고, </p>
                            <p className={styles.subTitle}>최적의 여행계획을 세워보세요.</p>
                        </div>
                    </article>
                </section>
            </section>
            <figure className={styles.box2}>
                <div className={styles.banner} ref={bannerRef}>
                </div>
            </figure>
        </main>
    )
}