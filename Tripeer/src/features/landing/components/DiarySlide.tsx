import useAnimation from "../hook/useAnimation"
import { useRef } from "react"
import styles from "./diarySlide.module.css"

export default function DiarySlide(): JSX.Element{
    const titleRef = useRef<null | HTMLHeadingElement>(null)
    const bannerRef = useRef<null | HTMLDivElement>(null)

    useAnimation([titleRef,bannerRef])

    return(
        <main className={styles.container}>
            <section className={styles.box1}>
                <article className={styles.titleBox}>
                    <h1 className={styles.title} ref={titleRef}>여행의 모든 순간을 상세히 기록하고, <br/>사진과 함께 저장하세요.</h1>
                </article>
            </section>
            <figure className={styles.box2}>
                <div className={styles.banner} ref={bannerRef}></div>
            </figure>
        </main>
    )
}