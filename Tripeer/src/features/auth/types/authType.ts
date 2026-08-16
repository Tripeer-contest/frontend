import {
  UseMutateAsyncFunction,
  UseMutateFunction,
} from '@tanstack/react-query';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';

export interface EmailHook {
  codeError: boolean;
  confirm: () => Promise<void>;
  emailValideError: boolean;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  mutateQuery: {
    mutateAsync: UseMutateAsyncFunction<
      any,
      Error,
      {
        email: string;
        code: string;
        url: string;
      },
      unknown
    >;
    data: any;
    isSuccess: boolean;
    isError: boolean;
    isPending: boolean;
  };
  prevHandler: () => void;
  sendCode: () => void;
  sendEmail: string;
  sendQuery: {
    data: any;
    isError: boolean;
    isPending: boolean;
    mutate: UseMutateFunction<
      any,
      Error,
      { url: string; email: string },
      unknown
    >;
  };
  setSendEmail: Dispatch<SetStateAction<string>>;
  codeRef: MutableRefObject<HTMLInputElement | null>;
}

export interface PasswordHook {
  confirmRef: MutableRefObject<HTMLInputElement | null>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  invalidInput: boolean;
  isError: boolean;
  isPending: boolean;
  notSameInput: boolean;
  regist: () => Promise<void>;
}
