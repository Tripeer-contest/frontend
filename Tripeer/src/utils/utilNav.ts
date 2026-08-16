import styles from '../components/nav/navbar.module.css';

export const Order_Bottom_Page = {
  '/plan': styles.planOrder,
  '/diary': styles.diaryOrder,
  '/home': styles.homeOrder,
  '/cart': styles.cartOrder,
  '/mypage': styles.mypageOrder,
};

export const handleNavLink = ({ isActive }: { isActive: boolean }) => {
  return isActive ? styles.activeBtn : styles.unactiveBtn;
};
