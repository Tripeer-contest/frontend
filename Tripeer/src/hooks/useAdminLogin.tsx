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
    try {
      return await axios.post('/login', { id: '', pw: '' });
    } catch (e) {
      console.log('POST ERROR : admin login failed');
    }
  };

  const mutation = useMutation({
    mutationFn: loginPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin'] }).then();
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
