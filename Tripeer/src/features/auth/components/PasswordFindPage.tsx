import styles from '../assets/register.module.css';
import back_icon from '../../../assets/button/back.svg';
import { useState } from 'react';
import useFindPasswordEmail from '../hook/useFindPasswordEmail';
import TripeerRegisterEmail from './TripeerRegisterEmail';
import TripeerRegisterPassword from './TripeerRegisterPassword';
import usePasswordUtil from '../hook/usePasswordUtil';

export interface PasswordForm {
  email?: string;
  password?: string;
  code?: string;
}

export default function PasswordFindPage({
  closeHandler,
}: {
  closeHandler: () => void;
}) {
  const [passwordForm, setPasswordForm] = useState<PasswordForm>({});
  const close = () => {
    setPasswordForm({});
    closeHandler();
  };
  const emailCustomHook = useFindPasswordEmail(setPasswordForm, close);
  const passwordCustomHook = usePasswordUtil(
    passwordForm,
    close,
    'https://tripeer.co.kr/api/user/password',
    'patch',
  );
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <img
          src={back_icon}
          alt="트리피어-back-icon"
          className={styles.back}
          onClick={close}
        />
        비밀번호 찾기
      </header>
      {!passwordForm.code && (
        <TripeerRegisterEmail customHook={emailCustomHook} />
      )}
      {passwordForm.code && (
        <TripeerRegisterPassword customHook={passwordCustomHook} />
      )}
    </section>
  );
}
