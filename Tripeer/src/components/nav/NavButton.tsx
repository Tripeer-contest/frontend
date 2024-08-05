// 내부 모듈
import styles from './navbar.module.css';

// 외부 모듈
import { NavLink } from 'react-router-dom';

interface NavButtonInterface {
  to: string;
  text: string;
}

export default function NavButton({ to, text }: NavButtonInterface) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? styles.activeBtn : styles.unactiveBtn
      }
    >
      {text}
    </NavLink>
  );
}
