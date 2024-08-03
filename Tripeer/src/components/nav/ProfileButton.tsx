// 내부 모듈
import styles from './navbar.module.css';
import toggleIcon from '../../assets/toggle/toggle.svg';
import ProfileList from './ProfileList';

// 외부 모듈
import { useState } from 'react';

export default function ProfileButton() {
  const [toggleClicked, setToggleClicked] = useState(false);
  const name = 'test';
  const toggleClass = `${styles.toggleIcon} ${toggleClicked ? styles.onToggle : styles.offToggle}`;
  const toggleHandler = () => {
    setToggleClicked((prev) => !prev);
  };
  return (
    <div className={styles.profileBox}>
      <img src="" alt="user" className={styles.userImg} />
      <p className={styles.userName}>{name}</p>
      <img
        src={toggleIcon}
        alt="toggle-icon"
        className={toggleClass}
        onClick={toggleHandler}
      />
      {toggleClicked ? <ProfileList toggleHandler={toggleHandler} /> : null}
    </div>
  );
}
