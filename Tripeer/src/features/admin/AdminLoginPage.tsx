import styles from './adminLogin.module.css';
import logo from '../../../public/logo/logo_1.png';
import useAdminLogin from './hooks/useAdminLogin.tsx';
import InputBox from '../../components/admin/InputBox.tsx';

export default function AdminLoginPage() {
  const { id, pw, onChangeIdHandler, onChangePwHandler, onKeyDown, onClick } =
    useAdminLogin();

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.logoImgBox}>
          <img src={logo} alt={'로고'} className={styles.logoImg} />
        </div>
        <InputBox
          placeholder="아이디"
          value={id}
          onChange={onChangeIdHandler}
          onKeyDown={onKeyDown}
          type={'input'}
        />
        <InputBox
          placeholder="비밀번호"
          value={pw}
          onChange={onChangePwHandler}
          onKeyDown={onKeyDown}
          type={'password'}
        />
        <div className={styles.loginBtn} onClick={onClick}>
          로그인
        </div>
      </div>
    </div>
  );
}
