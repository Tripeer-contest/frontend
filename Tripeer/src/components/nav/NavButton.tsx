// 내부 모듈
import NavIcon from './NavIcon';
import { NavButtonInterface } from '../../types/NavTypes';
import { handleNavLink } from '../../utils/utilNav';

// 외부 모듈
import { NavLink } from 'react-router-dom';
import BtnLayout from './layout/BtnLayout';

export default function NavButton({ to, text }: NavButtonInterface) {
  const classRoute = to.replace('/', '');

  return (
    <BtnLayout to={to}>
      <NavIcon to={to} classRoute={classRoute} />
      <NavLink to={to} className={handleNavLink}>
        {text}
      </NavLink>
    </BtnLayout>
  );
}
