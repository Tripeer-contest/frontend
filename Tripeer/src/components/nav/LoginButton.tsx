// 내부 모듈
import styles from './navbar.module.css';

// 외부 모듈
import { Link } from 'react-router-dom';

export default function LoginButton() {
  return (
    <Link to="login" className={styles.loginBox}>
      로그인
    </Link>
  );
}
