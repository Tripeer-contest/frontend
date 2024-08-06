// 내부 모듈
import FullLogo from './FullLogo';
import AuthButton from './AuthButton';
import styles from './navbar.module.css';
import NavButton from './NavButton';

export default function NavBar() {
  return (
    <nav className={styles.container}>
      <FullLogo />
      <input type="checkbox" id="hamburger" />
      <label htmlFor="hamburger" className={styles.hamburger} />
      <ul className={styles.linkBox}>
        <hr className={styles.AuthLine} />
        <NavButton to="/plan" text="일정 계획" />
        <NavButton to="/diary" text="지난 여행" />
        <NavButton to="/place" text="여행지" />
        <AuthButton />
      </ul>
    </nav>
  );
}
