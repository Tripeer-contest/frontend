import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import styles from '../assets/register.module.css';
import { Register } from './RegisterPage';
import {
  dayCheck,
  isValidDate,
  monthCheck,
  yearCheck,
} from '../../../utils/utilValidate';

export default function TripeerRegisterBirth({
  nickname,
  setBirth,
}: {
  nickname: string;
  setBirth: Dispatch<SetStateAction<Register>>;
}) {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [warn, setWarn] = useState(false);

  const setPrev = () => {
    setBirth({});
  };

  const inputHandler = (
    e: ChangeEvent<HTMLInputElement>,
    setState: Dispatch<SetStateAction<string>>,
  ) => {
    const value = e.target.value;
    const reg = /^\d*$/;
    if (reg.test(value)) {
      setState(value);
    }
  };

  const nextHandler = () => {
    yearCheck(year) &&
    monthCheck(month, setMonth) &&
    dayCheck(day, setDay) &&
    isValidDate(+year, +month, +day)
      ? setBirth((prev) => ({ ...prev, year: year, month: month, day: day }))
      : setWarn(true);
  };
  return (
    <>
      <h3 className={styles.title}>{nickname}님의</h3>
      <h3 className={styles.title}>생년월일을 입력해주세요.</h3>
      <div className={styles.inputEmailBox}>
        <div className={styles.dateBox}>
          <input
            className={styles.input}
            placeholder={'연도'}
            maxLength={4}
            value={year}
            onChange={(e) => {
              inputHandler(e, setYear);
            }}
            onKeyUp={(e) => {
              e.key === 'Enter' && nextHandler();
            }}
          />
          <p className={styles.bw}>/</p>
          <input
            className={styles.input}
            placeholder={'월'}
            maxLength={2}
            value={month}
            onChange={(e) => {
              inputHandler(e, setMonth);
            }}
            onKeyUp={(e) => {
              e.key === 'Enter' && nextHandler();
            }}
          />
          <p className={styles.bw}>/</p>
          <input
            className={styles.input}
            placeholder={'일'}
            maxLength={2}
            value={day}
            onChange={(e) => {
              inputHandler(e, setDay);
            }}
            onKeyUp={(e) => {
              e.key === 'Enter' && nextHandler();
            }}
          />
        </div>
        {warn && <p className={styles.warnText}>알맞는 생년월일이 아닙니다.</p>}
      </div>
      <div className={styles.btnBox}>
        <button className={styles.prevBtn} onClick={setPrev}>
          이전
        </button>
        <button className={styles.nextBtn} onClick={nextHandler}>
          다음
        </button>
      </div>
    </>
  );
}
