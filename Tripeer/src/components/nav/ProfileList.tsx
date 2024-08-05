// 내부 모듈
import styles from './navbar.module.css';
import ProfileOption from './ProfileOption';
import mypageIcon from '../../assets/auth/mypage.svg';
import logoutIcon from '../../assets/auth/logout.svg';

interface ListProps {
  toggleHandler: () => void;
}

export default function ProfileList({ toggleHandler }: ListProps) {
  return (
    <>
      <ul className={styles.options}>
        <ProfileOption icon={mypageIcon} text="마이 페이지" url="/mypage" />
        <ProfileOption icon={logoutIcon} text="로그아웃" />
      </ul>
      <div className={styles.background} onClick={toggleHandler} />
    </>
  );
}
