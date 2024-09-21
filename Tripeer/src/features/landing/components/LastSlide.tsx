import useAnimation from '../hook/useAnimation';
import { useRef } from 'react';
import styles from './lastSlide.module.css';

interface Props {
  scrollTop: () => void;
}

export default function LastSlide({ scrollTop }: Props): JSX.Element {
  const titleRef = useRef<null | HTMLHeadingElement>(null);
  const linkRef = useRef<null | HTMLDivElement>(null);

  useAnimation([titleRef, linkRef]);

  return (
    <main className={styles.container}>
      <section className={styles.box1}>
        <article className={styles.titleBox}>
          <h1 className={styles.title} ref={titleRef}>
            여행의 모든 순간을
            <br /> 함께하세요.
          </h1>
        </article>
      </section>
      <div className={styles.startBtn} ref={linkRef} onClick={scrollTop}>
        시작하기
      </div>
    </main>
  );
}
