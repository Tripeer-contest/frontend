import { Dispatch, SetStateAction } from 'react';
import useSendEmail from './useSendEmail';
import { Register } from '../components/RegisterPage';
import useEmailConfirm from './useEmailConfirm';

export default function useEmailUtil(
  setter: Dispatch<SetStateAction<Register>>,
) {
  const {
    emailValideError,
    inputRef,
    sendCode,
    sendEmail,
    sendQuery,
    setSendEmail,
  } = useSendEmail('https://tripeer.co.kr/api/user/valid/email');

  const { codeError, codeRef, mutateQuery, confirm } = useEmailConfirm(
    sendEmail,
    setter,
    'https://tripeer.co.kr/api/user/valid/email',
  );

  const prevHandler = () => {
    setter((prev) => ({
      nickname: prev.nickname,
    }));
  };

  return {
    inputRef,
    sendCode,
    confirm,
    setSendEmail,
    sendEmail,
    sendQuery,
    emailValideError,
    mutateQuery,
    codeError,
    prevHandler,
    codeRef,
  };
}
