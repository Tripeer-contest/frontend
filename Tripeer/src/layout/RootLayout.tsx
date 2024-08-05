import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/nav/NavBar';
import { UrlStringType } from '../types/UrlTypes';
import { checkIsNav } from '../utils/utilPath';

export default function RootLayout() {
  const locate = useLocation();
  const IsNav = checkIsNav(locate.pathname as UrlStringType);
  return (
    <>
      {IsNav ? <NavBar /> : null}
      <Outlet />
    </>
  );
}
