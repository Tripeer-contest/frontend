import { useRef, useState } from 'react';
import { useMutateSignUp } from './useSendQuery';

export default function usePasswordUtil(
  registerInfo: { code?: string; email?: string },
  nextHandler: () => void,
  url: string,
  method: string,
) {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const confirmRef = useRef<null | HTMLInputElement>(null);
  const [invalidInput, setInValidInput] = useState(false);
  const [notSameInput, setNotSameInput] = useState(false);
  const { isError, isPending, mutateAsync } = useMutateSignUp();

  const passwordChcek = () => {
    const reg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    const password = inputRef.current ? inputRef.current.value : '';
    return reg.test(password) ? password : '';
  };

  const sameChek = () => {
    const inputValue = inputRef.current ? inputRef.current.value : '';
    const checkValue = confirmRef.current ? confirmRef.current.value : '';
    return inputValue === checkValue;
  };

  const regist = async () => {
    const validPassword = passwordChcek();
    if (validPassword) {
      setInValidInput(false);
      if (sameChek()) {
        setNotSameInput(false);
        await mutateAsync({
          register: {
            ...registerInfo,
            password: validPassword,
          },
          url: url,
          method: method,
        });
        nextHandler();
      } else {
        setNotSameInput(true);
      }
    } else {
      setInValidInput(true);
      setNotSameInput(false);
    }
  };
  return {
    inputRef,
    confirmRef,
    regist,
    invalidInput,
    notSameInput,
    isError,
    isPending,
  };
}
