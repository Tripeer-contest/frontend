import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from './assets/logo.png';
import styles from './redirectPage.module.css';

export default function RedirectPage() {
  const navigate = useNavigate();

  const logoAnimation = {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
    transition: { duration: 1, delay: 0 },
  };

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
      <motion.div {...logoAnimation} className={styles.main}>
        <img src={logo} alt={'logo'} className={styles.image} />
      </motion.div>
    </div>
  );
}
