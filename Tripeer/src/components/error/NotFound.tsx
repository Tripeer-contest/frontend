import styles from './notfound.module.css';
import NotFoundTitle from '../../assets/error/notFoundText.webp';
import { Link } from 'react-router-dom';

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
          <br />
          주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
        </p>
        {/* <p className={styles.notfoundSubText}>
          주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
        </p> */}
        <Link className={styles.homeBtn} to="/">
          GO HOME
        </Link>
      </article>
    </main>
  );
}
