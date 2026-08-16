import { useNavigate } from 'react-router-dom';
import styles from '../navbar.module.css';
import { NavUrl } from '../../../types/NavTypes';
import { Order_Bottom_Page } from '../../../utils/utilNav';
import { ReactNode } from 'react';

export default function BtnLayout({
  to,
  children,
}: {
  to: NavUrl;
  children: ReactNode;
}) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(to);
  };
  return (
    <div
      className={`${styles.bottomNavIcon} ${Order_Bottom_Page[to]}`}
      onClick={clickHandler}
    >
      {children}
    </div>
  );
}
