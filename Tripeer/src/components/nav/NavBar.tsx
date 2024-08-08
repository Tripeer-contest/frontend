// 내부 모듈
import FullLogo from './FullLogo';
import styles from './navbar.module.css';
import NavButton from './NavButton';
import NavHome from './NavHome';

export default function NavBar() {
  return (
    <nav className={styles.container}>
      <FullLogo />
      <ul className={styles.linkBox}>
        <NavHome />
        <NavButton to="/plan" text="일정 계획" />
        <NavButton to="/diary" text="지난 여행" />
        <NavButton to="/cart" text="찜 목록" />
        <NavButton to="/mypage" text="마이페이지" />
      </ul>
    </nav>
  );
}
