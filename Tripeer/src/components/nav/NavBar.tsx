// 내부 모듈
import FullLogo from '../FullLogo';
import AuthButton from './AuthButton';
import styles from './navbar.module.css';
import NavButton from './NavButton';

export default function NavBar() {
  return (
    <nav className={styles.container}>
      <FullLogo />
      <ul className={styles.linkBox}>
        <NavButton to="/plan" text="일정 계획" />
        <NavButton to="/diary" text="지난 여행" />
        <NavButton to="/place" text="여행지" />
        <AuthButton />
      </ul>
    </nav>
  );
}
