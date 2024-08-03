import styles from './notfound.module.css';
import NotFoundTitle from '../../assets/error/notFoundText.png';

export default function NotFound() {
  return (
    <main className={styles.container}>
      <article className={styles.imageBox}>
        <img
          src={NotFoundTitle}
          alt="not-found-title"
          className={styles.notfoundText}
        />
        <p className={styles.notfoundSubText}>
          페이지의 주소가 잘못 입력되었거나,
        </p>
        <p className={styles.notfoundSubText}>
          주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
        </p>
        <a className={styles.homeBtn}>GO HOME</a>
      </article>
    </main>
  );
}
