import styles from './registerLoading.module.css';
import registerLoading from '../assets/registerLoading.png';
import logo from '../assets/logo.png';

const RegisterLoading = () => {
  return (
    <main className={styles.container}>
      <div className={styles.imgBox}>
        <img
          src={registerLoading}
          alt={'register-loading'}
          className={styles.img}
        />
      </div>
      <div className={styles.body}>
        <img src={logo} alt={'logo'} className={styles.logoImg} />
      </div>
    </main>
  );
};

export default RegisterLoading;
