import zustandStore from '../../../store/store.tsx';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const useRegisterStyle = () => {
  const { r_backPage, r_nickname, r_year, r_month, r_day, r_style } =
    zustandStore();
  const [errMsg, setErrMsg] = useState<string>('');

  const queryClient = useQueryClient();

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
    const response = await axios.post(
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

    const authorization = response.headers.authorization;
    const refresh = response.headers.refresh;
    const endTime = response.headers.endTime;

    return { authorization, refresh, endTime };
  };

  const mutation = useMutation({
    mutationFn: loginPost,
    onSuccess: ({ authorization, refresh, endTime }) => {
      queryClient.invalidateQueries({ queryKey: ['admin'] }).then();
      queryClient.setQueryData(['authorization'], authorization);
      queryClient.setQueryData(['refresh'], refresh);
      localStorage.setItem('endTime', endTime);
    },
    onError: (error) => {
      console.log('Register Login Failed : ', error);
    },
  });

  return { cancelHandler, nextHandler, errMsg };
};

export default useRegisterStyle;
