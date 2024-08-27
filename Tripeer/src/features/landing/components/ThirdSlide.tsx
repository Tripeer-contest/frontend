import useAnimation from '../hook/useAnimation';
import { useRef } from 'react';
import styles from './thirdSlide.module.css';
import thirdImg from '../assets/thirdSlideImg.webp';
import titleIcon1 from '../assets/titleIcon1.svg';
import titleIcon2 from '../assets/titleIcon2.svg';
import titleIcon3 from '../assets/titleIcon3.svg';

export default function ThirdSlide(): JSX.Element {
  const sectionRef = useRef<null | HTMLElement>(null);
  const bannerRef = useRef<null | HTMLDivElement>(null);

  useAnimation([sectionRef, bannerRef]);

  return (
    <main className={styles.container}>
      <section className={styles.box1}>
        <section className={styles.titleContent} ref={sectionRef}>
          <article className={styles.titleBox}>
            <div className={styles.titleImgBox}>
              <img
                src={titleIcon1}
                className={styles.titleImg}
                alt="title-icon"
              />
            </div>
            <div className={styles.titles}>
              <h1 className={styles.title}>플랜생성</h1>
              <p className={styles.subTitle}>
                여행하고 싶은 목적지를 설정하고,
              </p>
              <p className={styles.subTitle}>일정을 선택하세요.</p>
            </div>
          </article>
          <article className={styles.titleBox}>
            <div className={styles.titleImgBox}>
              <img
                src={titleIcon2}
                className={styles.titleImg}
                alt="title-icon"
              />
            </div>
            <div className={styles.titles}>
              <h1 className={styles.title}>스팟선택</h1>
              <p className={styles.subTitle}>가고 싶은 장소를 선택하고, </p>
              <p className={styles.subTitle}>
                지도를 통해 친구들과 공유해 보세요.
              </p>
            </div>
          </article>
          <article className={styles.titleBox}>
            <div className={styles.titleImgBox}>
              <img
                src={titleIcon3}
                className={styles.titleImg}
                alt="title-icon"
              />
            </div>
            <div className={styles.titles}>
              <h1 className={styles.title}>플랜조정</h1>
              <p className={styles.subTitle}>최단 거리로 추천 받고, </p>
              <p className={styles.subTitle}>최적의 여행계획을 세워보세요.</p>
            </div>
          </article>
        </section>
      </section>
      <figure className={styles.box2} ref={bannerRef}>
        <img src={thirdImg} className={styles.banner} alt="landing-img" />
      </figure>
    </main>
  );
}
