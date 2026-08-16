import { useEffect, useRef, useState } from 'react';
import styles from '../login.module.css';
import getDeviceInfo from '../../../utils/sendFlutter';
import { SocialPlatform } from '../data/social';
import useModal from '../../../hooks/useModal';
import RegisterPage from './RegisterPage';
import { useMutationLogin } from '../hook/useSendQuery';
import { useNavigate } from 'react-router-dom';
import MutationLoading from '../../../components/loading/MutationLoading';
import Notify from '../../planDetail/components/notify/Notify';
import warn_icon from '../../../assets/error/warn.svg';
import PasswordFindPage from './PasswordFindPage';

export default function TripeerForm() {
  const [socialArr, setSocialArr] = useState<string[]>([]);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const RegisterModal = useModal();
  const PasswordModal = useModal();
  const { isError, isPending, mutateAsync, error } = useMutationLogin();
  const navigate = useNavigate();
  useEffect(() => {
    const getSocial = async () => {
      const social = await getDeviceInfo();
      setSocialArr(social);
    };
    getSocial();
  }, []);

  const login = async () => {
    const email = emailRef.current ? emailRef.current.value : '';
    const password = passwordRef.current ? passwordRef.current.value : '';
    await mutateAsync({ email, password });
    navigate('/home');
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className={styles.formBox}>
        <input
          type="text"
          className={styles.inputBox}
          placeholder="이메일 입력"
          ref={emailRef}
        />
        <input
          type="password"
          className={styles.inputBox}
          placeholder="비밀번호 입력"
          ref={passwordRef}
        />
        <button className={styles.inputBtn} onClick={login}>
          로그인
        </button>
        <aside className={styles.authAbout}>
          <span onClick={PasswordModal.open}>비밀번호 찾기</span>
          <div>|</div>
          <span onClick={RegisterModal.open}>회원가입</span>
        </aside>
        {socialArr.length > 0 && (
          <section className={styles.socialFormBox}>
            {socialArr.map((social) => (
              <a
                key={social}
                className={styles.socialChange}
                href={SocialPlatform[social].href}
                style={{
                  backgroundColor: `${SocialPlatform[social].style.backgroundColor}`,
                  border: `${SocialPlatform[social].style.border}`,
                }}
              >
                <img src={SocialPlatform[social].img} alt="social-login" />
              </a>
            ))}
          </section>
        )}
      </form>
      <RegisterModal.ModalLayout className={styles.modalLayout}>
        <RegisterPage closeHandler={RegisterModal.close} />
      </RegisterModal.ModalLayout>
      <PasswordModal.ModalLayout className={styles.modalLayout}>
        <PasswordFindPage closeHandler={PasswordModal.close} />
      </PasswordModal.ModalLayout>
      <MutationLoading isShow={isPending} />
      <Notify
        isActive={isError}
        message={error?.message ? error.message : '네트워크가 불안정합니다.'}
        title="에러"
        img={warn_icon}
      />
    </>
  );
}
