// 내부 모듈
import { useLocation } from 'react-router-dom';
import Alarm from '../alarm/Alarm';
import FullLogo from './FullLogo';
import styles from './navbar.module.css';
import NavButton from './NavButton';
import { UrlStringType } from '../../types/UrlTypes';
import { checkIsAlarm } from '../../utils/utilPath';

export default function NavBar() {
  const locate = useLocation().pathname as UrlStringType;
  const isAlarm = checkIsAlarm(locate);
  return (
    <nav className={styles.container}>
      <FullLogo />
      {isAlarm && <Alarm />}
      <ul className={styles.linkBox}>
        <NavButton to="/home" text="홈" />
        <NavButton to="/plan" text="일정 계획" />
        <NavButton to="/diary" text="지난 여행" />
        <NavButton to="/cart" text="찜 목록" />
        <NavButton to="/mypage" text="마이페이지" />
      </ul>
    </nav>
  );
}
