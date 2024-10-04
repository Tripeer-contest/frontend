import { Fragment, useEffect, useState } from 'react';
import styles from '../login.module.css';
import getDeviceInfo from '../../../utils/sendFlutter';
import SocialButton from './SocialButton';
import TripeerButton from './TripeerButton';

export default function SocialForm({
  loginModeChange,
}: {
  loginModeChange: () => void;
}) {
  const [socialArr, setSocialArr] = useState<string[]>([]);
  useEffect(() => {
    const getSocial = async () => {
      const social = await getDeviceInfo();
      setSocialArr(social);
    };
    getSocial();
  }, []);
  return (
    <>
      {socialArr.length > 0 && (
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
          <TripeerButton loginModeChange={loginModeChange} />
        </>
      )}
    </>
  );
}
