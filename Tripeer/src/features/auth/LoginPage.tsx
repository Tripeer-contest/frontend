import LoginLayout from './layout/LoginLayout';
import Logo from '../../assets/logo.webp';
import styles from './login.module.css';
import src from './assets/bottom.svg';
import { useState } from 'react';
import SocialForm from './components/SocialForm';
import TripeerForm from './components/TripeerForm';

export default function LoginPage() {
  const [mode, setMode] = useState(false);

  const loginModeChange = () => {
    setMode((prev) => !prev);
  };

  return (
    <LoginLayout>
      <div onClick={() => setMode(false)} style={{ cursor: 'pointer' }}>
        <img src={Logo} alt="트리피어로고" className={styles.Logo} />
      </div>
      <>
        {mode ? (
          <TripeerForm />
        ) : (
          <SocialForm loginModeChange={loginModeChange} />
        )}
        <div className={styles.center}>
          <img src={src} alt={'bottom'} />
          <p>About Tripeer</p>
        </div>
      </>
    </LoginLayout>
  );
}
