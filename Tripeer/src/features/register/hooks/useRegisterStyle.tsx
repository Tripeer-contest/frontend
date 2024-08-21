import zustandStore from '../../../store/store.tsx';
import axios from 'axios';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const useRegisterStyle = () => {
  const { r_backPage, r_nickname, r_year, r_month, r_day, r_style } =
    zustandStore();
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

  const loginPost = async () => {
    return await axios.post(
      '/api/user/signup',
      {
        nickname: r_nickname,
        year: r_year,
        month: r_month,
        day: r_day,
        style1: r_style[0],
        style2: r_style[1] ? r_style[1] : null,
        style3: r_style[2] ? r_style[2] : null,
      },
      { withCredentials: true },
    );
  };

  const mutation = useMutation({
    mutationFn: loginPost,
    onSuccess: () => {
      navigate('/redirect');
    },
    onError: (error) => {
      console.log('Register Login Failed : ', error);
    },
  });

  return { cancelHandler, nextHandler, errMsg };
};

export default useRegisterStyle;
