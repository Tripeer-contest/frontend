import LoginLayout from './layout/LoginLayout';
import Logo from '../../assets/full_logo.webp';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import SocialButton from './components/SocialButton';

export default function LoginPage() {
  return (
    <LoginLayout>
      <Link to="/">
        <img src={Logo} alt="tripeer-logo-full" className={styles.Logo} />
      </Link>
      <div className={styles.borderBox}>
        <div className={styles.line} />
        <p>로그인&회원가입</p>
        <div className={styles.line} />
      </div>
      <SocialButton social="google" />
      <SocialButton social="kakao" />
      <SocialButton social="naver" />
    </LoginLayout>
  );
}
