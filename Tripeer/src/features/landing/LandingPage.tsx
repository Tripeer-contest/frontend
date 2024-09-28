import DiarySlide from './components/DiarySlide';
import FirstSlide from './components/FirstSlide';
import LastSlide from './components/LastSlide';
import PhotoSlide from './components/PhotoSlide';
import SecondSlide from './components/SecondSlide';
import ThirdSlide from './components/ThirdSlide';
import styles from './landing.module.css';
import { ReactNode, useEffect, useRef, useState } from 'react';
import LoginPage from '../auth/LoginPage.tsx';
import RedirectPage from '../redirect/RedirectPage.tsx';
import { getAuthorizationToken } from '../../utils/api.ts';
import { useNavigate } from 'react-router-dom';

export default function LandingPage(): JSX.Element {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollTop = () => {
    if (containerRef.current) containerRef.current.scrollTop = 0;
  };
  const [showAni, setShowAni] = useState(true);
  const navigate = useNavigate();
  const slides: ReactNode[] = [
    <LoginPage key={'login'} />,
    <FirstSlide key="first" scrollTop={scrollTop} />,
    <SecondSlide key="second" />,
    <ThirdSlide key="third" />,
    <DiarySlide key="diary" />,
    <PhotoSlide key="photo" />,
    <LastSlide key="last" scrollTop={scrollTop} />,
  ];

  useEffect(() => {
    const token = getAuthorizationToken();
    let timerId = 0;
    if (token) {
      timerId = window.setTimeout(() => {
        navigate('/home');
      }, 2000);
    } else {
      setShowAni(false);
    }
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [navigate]);

  return (
    <div className={styles.outer} ref={containerRef}>
      {showAni ? (
        <RedirectPage />
      ) : (
        slides.map((slide, index) => (
          <div key={index} className={styles.landingSlide}>
            {slide}
          </div>
        ))
      )}
    </div>
  );
}
