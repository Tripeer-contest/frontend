import useAnimation from '../hook/useAnimation';
import { useRef } from 'react';
import styles from './diarySlide.module.css';
import banner from '../assets/landingDiary.png';

export default function DiarySlide(): JSX.Element {
  const titleRef = useRef<null | HTMLHeadingElement>(null);
  const bannerRef = useRef<null | HTMLDivElement>(null);
  useAnimation([titleRef, bannerRef]);

  return (
    <main className={styles.container}>
      <section className={styles.box1}>
        <h1 className={styles.title} ref={titleRef}>
          여행의 모든 순간을,
          <br />
          함께 기록하고 추억하세요.
        </h1>
      </section>
      <figure className={styles.box2} ref={bannerRef}>
        <img src={banner} alt="diary-img" className={styles.banner} />
      </figure>
    </main>
  );
}
