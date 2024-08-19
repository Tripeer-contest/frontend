import styles from './adminLogin.module.css';
import logo from '../../assets/tripeer_icon.webp';
import useAdminLogin from '../../hooks/useAdminLogin.tsx';
import InputBox from '../../components/admin/InputBox.tsx';

export default function AdminLoginPage() {
  const { id, pw, onChangeIdHandler, onChangePwHandler, onKetDown, onClick } =
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
          onKeyDown={onKetDown}
        />
        <InputBox
          placeholder="비밀번호"
          value={pw}
          onChange={onChangePwHandler}
          onKeyDown={onKetDown}
        />
        <div className={styles.loginBtn} onClick={onClick}>
          로그인
        </div>
      </div>
    </div>
  );
}
