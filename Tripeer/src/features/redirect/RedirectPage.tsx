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
      // 들어갈것
      // 1. 소셜 로그인을 하면 쿠키에서 액세스와 리프레시를 가져와서 리액트쿼리로 저장한다
      // 2. 로컬에 만료일을 저장한다
      // 3. 쿠키는 삭제한다
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
