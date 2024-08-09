import styles from "./secondSlide.module.css"

export default function SecondSlide(): JSX.Element{

    return(
        <main className={styles.container}>
            <figure className={styles.box2}>
                <div className={styles.banner}>
                    <div className={styles.bannerBackLeft}></div>
                    <div className={styles.bannerBackRight}></div>
                </div>
            </figure>
            <section className={styles.box1}>
                <article className={styles.titleBox}>
                    <h1 className={styles.title}>Tripeer는 여러분이<br/> 사랑하는 사람들과 함께</h1>
                    <h1 className={styles.title}>여행 일정을 쉽게 계획하고<br/> 조정할 수 있게 도와줍니다.</h1>
                    <p className={styles.subTitle}>일정 공유, 음성 채팅, 실시간 업데이트 기능을 통해</p>
                    <p className={styles.subTitle}>모두가 만족하는 여행 계획을 완성하세요.</p>
                </article>
            </section>
        </main>
    )
}