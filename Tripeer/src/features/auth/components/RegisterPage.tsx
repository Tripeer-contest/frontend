import styles from '../assets/register.module.css';
import back_icon from '../../../assets/button/back.svg';
import { useState } from 'react';
import TripeerRegisterEmail from './TripeerRegisterEmail';
import TripeerRegisterPassword from './TripeerRegisterPassword';
import TripeerRegisterNickname from './TripeerRegisterNickname';
import TripeerRegisterBirth from './TripeerRegisterBirth';
import TripeerRegisterStyle from './TripeerRegisterStyle';

export interface Register {
  email?: string;
  password?: string;
  code?: string;
  nickname?: string;
  year?: string;
  month?: string;
  day?: string;
  style1?: string;
  style2?: string | null;
  style3?: string | null;
}

export default function RegisterPage({
  closeHandler,
}: {
  closeHandler: () => void;
}) {
  const [registerInfo, setRegisterInfo] = useState<Register>({});

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
      {registerInfo.nickname && !registerInfo.year && (
        <TripeerRegisterBirth
          nickname={registerInfo.nickname}
          setBirth={setRegisterInfo}
        />
      )}
      {registerInfo.nickname && registerInfo.year && !registerInfo.style1 && (
        <TripeerRegisterStyle
          nickname={registerInfo.nickname}
          setStyle={setRegisterInfo}
        />
      )}
      {registerInfo.nickname &&
        registerInfo.year &&
        registerInfo.style1 &&
        !registerInfo.email && (
          <TripeerRegisterEmail setEmail={setRegisterInfo} />
        )}
      {registerInfo.nickname &&
        registerInfo.year &&
        registerInfo.style1 &&
        registerInfo.email && (
          <TripeerRegisterPassword registerInfo={registerInfo} />
        )}
    </section>
  );
}
