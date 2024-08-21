import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const useAdminLogin = () => {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  const queryClient = useQueryClient();

  const onChangeHandler =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const validate = (value: string) => value.length <= 16;
      const isOk = validate(value);
      if (isOk) setState(value);
    };

  const loginPost = async () => {
    const response = await axios.post('/api/admin/login', {
      id: id,
      password: pw,
    });

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
      console.log('Admin Login Failed : ', error);
    },
  });

  const onKetDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  const onClick = () => {
    mutation.mutate();
  };

  return {
    id,
    pw,
    onChangeIdHandler: onChangeHandler(setId),
    onChangePwHandler: onChangeHandler(setPw),
    onKetDown,
    onClick,
  };
};

export default useAdminLogin;
