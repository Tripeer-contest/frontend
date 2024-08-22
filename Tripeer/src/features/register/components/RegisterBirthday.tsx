import styles from './registerBirthday.module.css';
import img from '../assets/birthday.png';
import CancelRegister from './CancelRegister.tsx';
import NextRegister from './NextRegister.tsx';
import useRegisterBirthday from '../hooks/useRegisterBirthday.tsx';
import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store.tsx';

const RegisterBirthday = () => {
  const [r_nickname, r_year, r_month, r_day] = zustandStore(
    useShallow((state) => [
      state.r_nickname,
      state.r_year,
      state.r_month,
      state.r_day,
    ]),
  );

  const {
    inputYearHandler,
    inputMonthHandler,
    inputDayHandler,
    cancelHandler,
    nextHandler,
    onKeyDown,
    errMsg,
  } = useRegisterBirthday();

  return (
    <main className={styles.container}>
      <div className={styles.imgBox}>
        <img src={img} alt={'register-loading'} className={styles.img} />
      </div>
      <div className={styles.body}>
        <section className={styles.box}>
          <p className={styles.body_p}>{r_nickname} 님의</p>
          <p className={styles.body_p}>생년월일을 알려주세요</p>
          <div className={styles.inputBox}>
            <input
              className={styles.input}
              placeholder={'연도'}
              maxLength={4}
              onChange={inputYearHandler}
              value={r_year}
              onKeyDown={onKeyDown}
            />
            <input
              className={styles.input}
              placeholder={'월'}
              maxLength={2}
              onChange={inputMonthHandler}
              value={r_month}
              onKeyDown={onKeyDown}
            />
            <input
              className={styles.input}
              placeholder={'일'}
              maxLength={2}
              onChange={inputDayHandler}
              value={r_day}
              onKeyDown={onKeyDown}
            />
          </div>
          <p className={styles.example}>ex) 2000년 1월 1일</p>
          <div className={styles.errBox}>
            <p className={styles.err}>{errMsg}</p>
          </div>
          <section className={styles.btnBox}>
            <CancelRegister cancelHandler={cancelHandler} />
            <NextRegister nextHandler={nextHandler} text={'다음'} />
          </section>
        </section>
      </div>
    </main>
  );
};

export default RegisterBirthday;