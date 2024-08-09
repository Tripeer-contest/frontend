import useAnimation from "../hook/useAnimation"
import { useRef } from "react"
import { Link } from "react-router-dom"
import styles from "./lastSlide.module.css"

export default function LastSlide(): JSX.Element{
    const titleRef = useRef<null | HTMLHeadingElement>(null)
    const linkRef = useRef<null | HTMLAnchorElement>(null)
    
    useAnimation([titleRef,linkRef])

    return(
        <main className={styles.container}>
            <section className={styles.box1}>
                <article className={styles.titleBox}>
                    <h1 className={styles.title} ref={titleRef}>여행의 모든 순간을<br/> 함께하세요.</h1>
                </article>
            </section>
            <Link to="/home" className={styles.startBtn} ref={linkRef}>
                시작하기
            </Link>
        </main>
    )
}