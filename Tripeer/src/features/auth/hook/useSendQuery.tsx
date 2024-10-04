import { useMutation } from '@tanstack/react-query';
import {
  duplicateNick,
  postValideEmail,
  sendEmailCode,
  tripeerLogin,
  tripeerSignUp,
} from '../api/authApi';
import { Register } from '../components/RegisterPage';

export default function useSendEmailQuery() {
  const { data, isError, isPending, mutate } = useMutation({
    mutationFn: (email: string) => sendEmailCode(email),
  });
  return { data, isError, isPending, mutate };
}

export function useMutateEmail() {
  const { mutateAsync, data, isSuccess, isError, isPending } = useMutation({
    mutationFn: ({ email, code }: { email: string; code: string }) =>
      postValideEmail(email, code),
  });
  return { mutateAsync, data, isSuccess, isError, isPending };
}

export function useMutateNick() {
  const { mutateAsync, isError, isPending } = useMutation({
    mutationFn: (nickname: string) => duplicateNick(nickname),
  });
  return { mutateAsync, isError, isPending };
}

export function useMutateSignUp() {
  const { mutateAsync, isError, isPending } = useMutation({
    mutationFn: (register: Register) => tripeerSignUp(register),
  });
  return {
    mutateAsync,
    isError,
    isPending,
  };
}

export function useMutationLogin() {
  const { mutateAsync, isError, isPending, isSuccess, error } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      tripeerLogin(email, password),
  });
  return {
    mutateAsync,
    isError,
    isPending,
    isSuccess,
    error,
  };
}
