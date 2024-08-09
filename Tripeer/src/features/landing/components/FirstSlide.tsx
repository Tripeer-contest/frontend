import { Link } from "react-router-dom"
import styles from "./firstSlide.module.css"
import useAnimation from "../hook/useAnimation"
import { useRef } from "react"

export default function FirstSlide(): JSX.Element{
    const titleRef1 = useRef<null | HTMLHeadingElement>(null)
    const titleRef2 = useRef<null | HTMLHeadingElement>(null)
    const subRef = useRef<null | HTMLParagraphElement>(null)
    const linkRef = useRef<null | HTMLAnchorElement>(null)
    const bannerRef = useRef<null | HTMLDivElement>(null)

    useAnimation([titleRef1,titleRef2,subRef,linkRef,bannerRef])

    return(
        <main className={styles.container}>
            <section className={styles.box1}>
                <article className={styles.titleBox}>
                    <h1 className={styles.title} ref={titleRef1}>함께 여행을, 함께 계획하다.</h1>
                    <h2 className={styles.title} ref={titleRef2}>여행 협업 플랫폼</h2>
                    <p className={styles.subTitle} ref={subRef}>여행 계획의 모든 것, 한곳에서 같이 계획하세요.</p>
                    <Link to="/home" className={styles.startBtn} ref={linkRef}>
                        시작하기
                    </Link>
                </article>
            </section>
            <figure className={styles.box2}>
                <div className={styles.banner} ref={bannerRef}></div>
            </figure>
        </main>
    )
}