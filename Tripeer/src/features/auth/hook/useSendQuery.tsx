import { useMutation } from '@tanstack/react-query';
import {
  duplicateNick,
  postValideEmail,
  sendEmailCode,
  tripeerLogin,
  tripeerSignUp,
} from '../api/authApi';

export default function useSendEmailQuery() {
  const { data, isError, isPending, mutate } = useMutation({
    mutationFn: ({ url, email }: { url: string; email: string }) =>
      sendEmailCode(url, email),
  });
  return { data, isError, isPending, mutate };
}

export function useMutateEmail() {
  const { mutateAsync, data, isSuccess, isError, isPending } = useMutation({
    mutationFn: ({
      email,
      code,
      url,
    }: {
      email: string;
      code: string;
      url: string;
    }) => postValideEmail(email, code, url),
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
    mutationFn: ({
      register,
      url,
      method,
    }: {
      register: { email?: string; password?: string; code?: string };
      url: string;
      method: string;
    }) => tripeerSignUp(register, url, method),
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
