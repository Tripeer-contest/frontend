import LoginLayout from './layout/LoginLayout';
import Logo from '../../assets/logo.webp';
import styles from './login.module.css';
import { Link } from 'react-router-dom';
import SocialButton from './components/SocialButton';
import src from './assets/bottom.svg';
import { Fragment, useEffect, useState } from 'react';
import getDeviceInfo from '../../utils/sendFlutter';

export default function LoginPage() {
  const [socialArr, setSocialArr] = useState<string[]>([]);
  useEffect(() => {
    const getSocial = async () => {
      const social = await getDeviceInfo();
      setSocialArr(social);
    };
    getSocial();
  }, []);
  return (
    <LoginLayout>
      <Link to="/">
        <img src={Logo} alt="tripeer-logo" className={styles.Logo} />
      </Link>
      {socialArr.length === 0 ? undefined : (
        <>
          <div className={styles.borderBox}>
            <div className={styles.line} />
            <p>로그인&회원가입</p>
            <div className={styles.line} />
          </div>
          {socialArr.map((social, idx) => (
            <Fragment key={idx}>
              <SocialButton social={social} />
            </Fragment>
          ))}
          <div className={styles.center}>
            <img src={src} alt={'bottom'} />
            <p>About Tripeer</p>
          </div>
        </>
      )}
    </LoginLayout>
  );
}
