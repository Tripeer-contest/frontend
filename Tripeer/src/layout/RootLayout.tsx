import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/nav/NavBar';
import { UrlStringType } from '../types/UrlTypes';
import { checkIsNav } from '../utils/utilPath';

export default function RootLayout() {
  const locate = useLocation();
  const IsNav = checkIsNav(locate.pathname as UrlStringType);
  return (
    <div style={{ height: '100vh', maxHeight: '100%' }}>
      {IsNav ? <NavBar /> : null}
      <Outlet />
    </div>
  );
}
