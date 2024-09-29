import logo from '../../assets/logo/logo_4.png';
import styles from './redirectPage.module.css';
import { useEffect, useState } from 'react';
import api, { getAuthorizationToken } from '../../utils/api.ts';
import { useNavigate } from 'react-router-dom';

export default function RedirectPage() {
  const [isAni, setIsAni] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const accessTest = async () => {
      const token = getAuthorizationToken();
      if (token) {
        try {
          await api.get('/user/myinfo');
          navigate('/home');
        } catch {
          setIsAni(false);
        }
      } else setIsAni(false);
    };
    accessTest().then();
  }, [navigate]);

  return (
    <>
      {isAni && (
        <div className={styles.main}>
          <img src={logo} alt={'logo'} className={styles.image} />
        </div>
      )}
    </>
  );
}
