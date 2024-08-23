import DiarySlide from './components/DiarySlide';
import FirstSlide from './components/FirstSlide';
import LastSlide from './components/LastSlide';
import PhotoSlide from './components/PhotoSlide';
import SecondSlide from './components/SecondSlide';
import ThirdSlide from './components/ThirdSlide';
import LandingLayout from './layout/LandingLayout';
import LandingScene from './layout/LandingScene';
import styles from './landing.module.css';
import { ReactNode, useRef } from 'react';
import LoginPage from '../auth/LoginPage.tsx';

export default function LandingPage(): JSX.Element {
  const loginRef = useRef<null | HTMLDivElement>(null);

  const scrollTop = () => {
    if (loginRef.current) {
      loginRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slides: ReactNode[] = [
    <LoginPage key={'login'} loginRef={loginRef} />,
    <FirstSlide key="first" scrollTop={scrollTop} />,
    <SecondSlide key="second" />,
    <ThirdSlide key="third" />,
    <DiarySlide key="diary" />,
    <PhotoSlide key="photo" />,
    <LastSlide key="last" scrollTop={scrollTop} />,
  ];

  return (
    <LandingLayout>
      <LandingScene>
        {slides.map((slide, index) => (
          <div key={index} className={styles.landingSlide}>
            {slide}
          </div>
        ))}
      </LandingScene>
    </LandingLayout>
  );
}
