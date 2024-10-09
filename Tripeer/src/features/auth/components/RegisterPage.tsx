import styles from '../assets/register.module.css';
import back_icon from '../../../assets/button/back.svg';
import { useState } from 'react';
import TripeerRegisterEmail from './TripeerRegisterEmail';
import TripeerRegisterPassword from './TripeerRegisterPassword';
import TripeerRegisterNickname from './TripeerRegisterNickname';
import TripeerRegisterStyle from './TripeerRegisterStyle';
import useEmailUtil from '../hook/useEmailUtil';
import usePasswordUtil from '../hook/usePasswordUtil';
import { useNavigate } from 'react-router-dom';

export interface Register {
  email?: string;
  password?: string;
  code?: string;
  nickname?: string;
  style1?: string;
  style2?: string | null;
  style3?: string | null;
}

export default function RegisterPage({
  closeHandler,
}: {
  closeHandler: () => void;
}) {
  const navigate = useNavigate();
  const [registerInfo, setRegisterInfo] = useState<Register>({});
  const emailCustomHook = useEmailUtil(setRegisterInfo);
  const passwordCustomHook = usePasswordUtil(
    registerInfo,
    () => {
      navigate('/home');
    },
    'https://tripeer.co.kr/api/user/signup/custom',
    'post',
  );
  const closeAll = () => {
    setRegisterInfo({});
    closeHandler();
  };
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <img
          src={back_icon}
          alt="트리피어-back-icon"
          className={styles.back}
          onClick={closeAll}
        />
        회원가입
      </header>
      {!registerInfo.nickname && (
        <TripeerRegisterNickname setNickname={setRegisterInfo} />
      )}

      {registerInfo.nickname && !registerInfo.style1 && (
        <TripeerRegisterStyle
          nickname={registerInfo.nickname}
          setStyle={setRegisterInfo}
        />
      )}
      {registerInfo.nickname && registerInfo.style1 && !registerInfo.email && (
        <TripeerRegisterEmail customHook={emailCustomHook} />
      )}
      {registerInfo.nickname && registerInfo.style1 && registerInfo.email && (
        <TripeerRegisterPassword customHook={passwordCustomHook} />
      )}
    </section>
  );
}
