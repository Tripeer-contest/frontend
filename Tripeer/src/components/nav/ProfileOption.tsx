// 내부 모듈
import styles from './navbar.module.css';

// 외부 모듈
import { useNavigate } from 'react-router-dom';

interface OptionProps {
  icon: string;
  text: string;
  url?: string;
}

const logout = () => {
  // 인증 추가되면 차후 작성
};

export default function ProfileOption({ icon, text, url }: OptionProps) {
  const navigate = useNavigate();
  const clickHandler = () => {
    if (url) navigate(url);
    else logout();
  };
  return (
    <li className={styles.option} onClick={clickHandler}>
      <img src={icon} className={styles.optionIcon} />
      <span>{text}</span>
    </li>
  );
}
