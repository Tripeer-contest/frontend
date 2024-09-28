import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/logo_4.png';
import styles from './redirectPage.module.css';
import { getAuthorizationToken } from '../../utils/api.ts';
import zustandStore from '../../store/store.tsx';

export default function RedirectPage() {
  const navigate = useNavigate();

  const setIsLogin = zustandStore((state) => state.h_setIsLogin);

  useEffect(() => {
    const timer = setTimeout(() => {
      const token = getAuthorizationToken();
      if (token !== undefined) {
        navigate('/home');
      } else navigate('/');
      setIsLogin(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate, setIsLogin]);

  return (
    <div>
      <div className={styles.main}>
        <img src={logo} alt={'logo'} className={styles.image} />
      </div>
    </div>
  );
}
