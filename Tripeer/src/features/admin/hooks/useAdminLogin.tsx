import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { postAdmin } from '../api/postAdmin.ts';

const useAdminLogin = () => {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  const navigate = useNavigate();

  const onChangeHandler =
    (setState: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const validate = (value: string) => value.length <= 16;
      const isOk = validate(value);
      if (isOk) setState(value);
    };

  const mutation = useMutation({
    mutationFn: () => postAdmin({ id, pw }),
    onSuccess: () => {
      navigate('/home');
    },

    onError: (error) => {
      console.log('Admin Login Failed : ', error);
    },
  });

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
    onKeyDown,
    onClick,
  };
};

export default useAdminLogin;
