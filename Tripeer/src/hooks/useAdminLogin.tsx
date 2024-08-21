import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

  const loginPost = async () => {
    return await axios.post('/api/admin/login', {
      id: id,
      password: pw,
    });
  };

  const mutation = useMutation({
    mutationFn: loginPost,
    onSuccess: () => {
      navigate('/home');
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
