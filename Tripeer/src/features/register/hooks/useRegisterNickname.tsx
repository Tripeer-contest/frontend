import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { getNicknameCheck } from '../api/getNicknameCheck.ts';
import zustandStore from '../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';

const useRegisterNickname = () => {
  const [value, setValue] = useState<string>('');
  const [errMsg, setErrMsg] = useState<string>('');
  const navigate = useNavigate();

  const [r_nextPage, r_setNickname] = zustandStore(
    useShallow((state) => [state.r_nextPage, state.r_setNickname]),
  );

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
      setErrMsg('사용할 수 없는 형식입니다');
    } else {
      setErrMsg('');
      mutation.mutate();
    }
  };

  const cancelHandler = () => {
    navigate('/');
  };

  const mutation = useMutation({
    mutationFn: () => getNicknameCheck(value),
    onSuccess: ({ check }) => {
      if (!check) {
        r_setNickname(value);
        r_nextPage();
      } else {
        setErrMsg('중복된 닉네임입니다');
      }
    },
    onError: () => {
      setErrMsg('다시 시도해주세요');
    },
  });

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      nextHandler();
    }
  };

  return { value, errMsg, inputHandler, nextHandler, cancelHandler, onKeyDown };
};

export default useRegisterNickname;
