import useAnimation from '../hook/useAnimation';
import { useRef } from 'react';
import styles from './lastSlide.module.css';
import contactImg from '../../../assets/button/contact.svg';
import { useNavigate } from 'react-router-dom';

interface Props {
  scrollTop: () => void;
}

export default function LastSlide({ scrollTop }: Props): JSX.Element {
  const titleRef = useRef<null | HTMLHeadingElement>(null);
  const linkRef = useRef<null | HTMLDivElement>(null);
  const navigate = useNavigate();
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
      <div className={styles.contactBox}>
        <img
          className={styles.contactImg}
          src={contactImg}
          alt="contact-tripeer"
        />
        <p className={styles.contactText} onClick={() => navigate(`/contact`)}>
          트리피어 문의하기
        </p>
      </div>
    </main>
  );
}
