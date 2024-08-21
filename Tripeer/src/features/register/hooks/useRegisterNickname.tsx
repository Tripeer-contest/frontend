import React, { useState } from 'react';
import axios from 'axios';
import zustandStore from '../../../store/store.tsx';

const useRegisterNickname = () => {
  const [value, setValue] = useState<string>('');
  const [errMsg, setErrMsg] = useState<string>('');

  const { r_backPage, r_nextPage, r_setNickname } = zustandStore();

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
    r_backPage();
  };

  const nicknameCheck = () => {
    axios
      .get(`/user/name/duplicatecheck/${value}`)
      .then((response) => {
        const check = response.data.data;
        console.log(response.data);

        if (!check) {
          r_setNickname(value);
          r_nextPage();
        } else {
          setErrMsg('중복된 닉네임입니다');
        }
      })
      .catch((error) => {
        console.log('Nickname Check Error : ', error);
      });
  };

  return { value, errMsg, inputHandler, nextHandler, cancelHandler };
};

export default useRegisterNickname;
