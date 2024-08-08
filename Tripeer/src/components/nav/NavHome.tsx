import { handleNavLink } from '../../utils/utilNav';
import BtnLayout from './layout/BtnLayout';
import styles from './navbar.module.css';
import tripeer from '../../assets/nav/tripeer.svg';

import { NavLink } from 'react-router-dom';

export default function NavHome() {
  return (
    <BtnLayout to="/home">
      <NavLink to="/home" className={handleNavLink}>
        <span className={styles.homeText}>홈</span>
        <div className={styles.homeBtn}>
          <img src={tripeer} alt="tripeer-logo" className={styles.homeImg} />
        </div>
      </NavLink>
    </BtnLayout>
  );
}
