import styles from './registerNickname.module.css';
import img from '../assets/nickname.png';
import CancelRegister from './CancelRegister.tsx';
import NextRegister from './NextRegister.tsx';
import InputNickname from './InputNickname.tsx';
import useRegisterNickname from '../hooks/useRegisterNickname.tsx';

const RegisterNickname = () => {
  const { value, errMsg, inputHandler, nextHandler, cancelHandler, onKeyDown } =
    useRegisterNickname();

  return (
    <main className={styles.container}>
      <div className={styles.imgBox}>
        <img src={img} alt={'register-loading'} className={styles.img} />
      </div>
      <div className={styles.body}>
        <section className={styles.box}>
          <p className={styles.body_p}>닉네임을 입력해주세요</p>
          <InputNickname
            placeholder={'10글자 내로 입력하세요'}
            value={value}
            inputHandler={inputHandler}
            onKeyDown={onKeyDown}
          />
          <div className={styles.errBox}>
            <p className={styles.err}>{errMsg}</p>
          </div>
          <section className={styles.center}>
            <CancelRegister cancelHandler={cancelHandler} />
            <NextRegister nextHandler={nextHandler} text={'다음'} />
          </section>
        </section>
      </div>
    </main>
  );
};

export default RegisterNickname;
