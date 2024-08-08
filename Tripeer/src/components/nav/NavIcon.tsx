import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

export default function NavIcon({
  classRoute,
  to,
}: {
  classRoute: string;
  to: string;
}) {
  const handleNavLink = ({ isActive }: { isActive: boolean }) => {
    let resultClass = `${styles.navIcon} `;
    resultClass += isActive
      ? styles['active' + classRoute]
      : styles['unactive' + classRoute];
    return resultClass;
  };

  return <NavLink to={to} className={handleNavLink}></NavLink>;
}
