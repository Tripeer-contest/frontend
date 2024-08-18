import React, { useState } from 'react';
import styles from './registerNickname.module.css';
import img from '../assets/nickname.png';
import axios from 'axios';

interface RegisterNicknameProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterNickname: React.FC<RegisterNicknameProps> = ({
  page,
  setPage,
  setNickname,
}) => {
  const [value, setValue] = useState<string>('');
  const [errMsg, setErrMsg] = useState<string>('');

  const validate = (value: string) => value.length <= 10;

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const isValid = validate(value);

    if (isValid) {
      setValue(value);
    }
  };

  const nextHandler = () => {
    const regExp = /[^a-zA-Z0-9가-힣]/;

    if (value.length < 2) {
      setErrMsg('2글자 이상 입력하세요');
    } else if (value.length > 10) {
      setErrMsg('10글자 내로 입력하세요');
    } else if (regExp.test(value)) {
      setErrMsg('특수문자는 사용할 수 없습니다');
    } else {
      setErrMsg('');
      nicknameCheck();
    }
  };

  const cancelHandler = () => {
    setPage(page - 1);
  };

  const nicknameCheck = () => {
    axios
      .get('/user/name/duplicatecheck/' + { value })
      .then((response) => {
        const check = response.data.data;
        if (!check) {
          setNickname(value);
          setPage(1);
        } else {
          setErrMsg('중복된 닉네임입니다');
        }
      })
      .catch((error) => {
        console.log('Nickname Check Error : ', error);
      });
  };

  return (
    <main className={styles.container}>
      <div className={styles.imgBox}>
        <img src={img} alt={'register-loading'} className={styles.img} />
      </div>
      <div className={styles.body}>
        <section className={styles.box}>
          <p className={styles.body_p}>닉네임을 입력해주세요</p>
          <input
            className={styles.input}
            placeholder="10글자 내로 입력하세요"
            value={value}
            onChange={inputHandler}
          />
          <div className={styles.errBox}>
            <p className={styles.err}>{errMsg}</p>
          </div>
          <section className={styles.center}>
            <div className={styles.cancel} onClick={cancelHandler}>
              취소
            </div>
            <div className={styles.next} onClick={nextHandler}>
              다음
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default RegisterNickname;
