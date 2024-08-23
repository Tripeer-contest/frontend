import LoginLayout from './layout/LoginLayout';
import Logo from '../../assets/full_logo.webp';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import SocialButton from './components/SocialButton';
import React from 'react';
import src from './assets/bottom.png';

interface Props {
  loginRef: React.RefObject<HTMLDivElement>;
}

export default function LoginPage({ loginRef }: Props) {
  return (
    <LoginLayout>
      <Link to="/">
        <img src={Logo} alt="tripeer-logo-full" className={styles.Logo} />
      </Link>
      <div className={styles.borderBox} ref={loginRef}>
        <div className={styles.line} />
        <p>로그인&회원가입</p>
        <div className={styles.line} />
      </div>
      <SocialButton social="google" />
      <SocialButton social="kakao" />
      <SocialButton social="naver" />
      <div className={styles.center}>
        <p>Tripeer 더 알아보기</p>
        <img src={src} alt={'bottom'} />
      </div>
    </LoginLayout>
  );
}
