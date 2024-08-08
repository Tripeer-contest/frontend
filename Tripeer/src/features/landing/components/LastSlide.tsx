import { Link } from "react-router-dom"
import styles from "./lastSlide.module.css"

export default function LastSlide(): JSX.Element{

    return(
        <main className={styles.container}>
            <section className={styles.box1}>
                <article className={styles.titleBox}>
                    <h1 className={styles.title}>여행의 모든 순간을<br/> 함께하세요.</h1>
                </article>
            </section>
            <Link to="/home">
            <button className={styles.startBtn}>
                시작하기
            </button>
            </Link>
        </main>
    )
}