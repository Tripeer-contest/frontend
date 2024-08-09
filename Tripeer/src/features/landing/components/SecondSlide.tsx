import useAnimation from "../hook/useAnimation"
import { useRef } from "react"
import styles from "./secondSlide.module.css"

export default function SecondSlide(): JSX.Element{
    const titleRef1 = useRef<null | HTMLHeadingElement>(null)
    const titleRef2 = useRef<null | HTMLHeadingElement>(null)
    const subRef1 = useRef<null | HTMLParagraphElement>(null)
    const subRef2 = useRef<null | HTMLParagraphElement>(null)
    const bannerRef = useRef<null | HTMLDivElement>(null)
    const bannerLeftRef = useRef<null | HTMLDivElement>(null)
    const bannerRightRef = useRef<null | HTMLDivElement>(null)

    useAnimation([titleRef1,titleRef2,subRef1,subRef2,bannerRef,bannerLeftRef,bannerRightRef])

    return(
        <main className={styles.container}>
            <figure className={styles.box2}>
                <div className={styles.bannerBack} >
                    <div className={styles.banner} ref={bannerRef}></div>
                    <div className={styles.bannerBackLeft} ref={bannerLeftRef}></div>
                    <div className={styles.bannerBackRight} ref={bannerRightRef}></div>
                </div>
            </figure>
            <section className={styles.box1}>
                <article className={styles.titleBox}>
                    <h1 className={styles.title} ref={titleRef1}>Tripeer는 여러분이<br/> 사랑하는 사람들과 함께</h1>
                    <h1 className={styles.title} ref={titleRef2}>여행 일정을 쉽게 계획하고<br/> 조정할 수 있게 도와줍니다.</h1>
                    <p className={styles.subTitle} ref={subRef1}>일정 공유, 음성 채팅, 실시간 업데이트 기능을 통해</p>
                    <p className={styles.subTitle} ref={subRef2}>모두가 만족하는 여행 계획을 완성하세요.</p>
                </article>
            </section>
        </main>
    )
}