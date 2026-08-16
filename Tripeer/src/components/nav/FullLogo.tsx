// 내부 모듈
import Logo from '../../assets/logo.webp';
import styles from './navbar.module.css';

// 외부 모듈
import { Link } from 'react-router-dom';

export default function FullLogo() {
  return (
    <Link to="/home">
      <img src={Logo} alt="Tripeer Logo" className={styles.logoImg} />
    </Link>
  );
}
