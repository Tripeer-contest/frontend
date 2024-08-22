import zustandStore from '../../../store/store.tsx';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../api/postRegister.ts';

const useRegisterStyle = () => {
  const { r_backPage, r_nickname, r_year, r_month, r_day, r_style } =
    zustandStore((state) => ({
      r_backPage: state.r_backPage,
      r_nickname: state.r_nickname,
      r_year: state.r_year,
      r_month: state.r_month,
      r_day: state.r_day,
      r_style: state.r_style,
    }));

  const [errMsg, setErrMsg] = useState<string>('');
  const navigate = useNavigate();

  const cancelHandler = () => {
    r_backPage();
  };

  const nextHandler = () => {
    if (r_style.length === 0) {
      setErrMsg('스타일을 선택해주세요');
    } else {
      mutation.mutate();
    }
  };

  const mutation = useMutation({
    mutationFn: () =>
      postRegister({ r_nickname, r_year, r_month, r_day, r_style }),
    onSuccess: () => {
      navigate('/redirect');
    },
    onError: (error) => {
      console.log('Register Login Failed : ', error);
      setErrMsg('다시 시도해주세요');
    },
  });

  return { cancelHandler, nextHandler, errMsg };
};

export default useRegisterStyle;
