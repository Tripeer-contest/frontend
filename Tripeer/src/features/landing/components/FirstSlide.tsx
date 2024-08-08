import { Link } from "react-router-dom"
import styles from "./firstSlide.module.css"

export default function FirstSlide(): JSX.Element{

    return(
        <main className={styles.container}>
            <section className={styles.box1}>
                <article className={styles.titleBox}>
                    <h1 className={styles.title}>함께 여행을, 함께 계획하다.</h1>
                    <h2 className={styles.title}>여행 협업 플랫폼</h2>
                    <p className={styles.subTitle}>여행 계획의 모든 것, 한곳에서 같이 계획하세요.</p>
                    <Link to="/home">
                        <button className={styles.startBtn}>시작하기</button>
                    </Link>
                </article>
            </section>
            <figure className={styles.box2}>
                <div className={styles.banner}></div>
            </figure>
        </main>
    )
}