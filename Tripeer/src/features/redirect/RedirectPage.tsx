import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo/logo_4.png';
import styles from './redirectPage.module.css';

export default function RedirectPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div>
      <div className={styles.main}>
        <img src={logo} alt={'logo'} className={styles.image} />
      </div>
    </div>
  );
}
