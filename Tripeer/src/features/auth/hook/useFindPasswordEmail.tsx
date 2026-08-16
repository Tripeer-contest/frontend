import { Dispatch, SetStateAction } from 'react';
import useSendEmail from './useSendEmail';
import { PasswordForm } from '../components/PasswordFindPage';
import useEmailConfirm from './useEmailConfirm';

export default function useFindPasswordEmail(
  setter: Dispatch<SetStateAction<PasswordForm>>,
  prevHandler: () => void,
) {
  const {
    emailValideError,
    inputRef,
    sendCode,
    sendEmail,
    sendQuery,
    setSendEmail,
  } = useSendEmail('https://tripeer.co.kr/api/user/valid/password');

  const { codeError, codeRef, mutateQuery, confirm } = useEmailConfirm(
    sendEmail,
    setter,
    'https://tripeer.co.kr/api/user/valid/password',
  );

  return {
    emailValideError,
    inputRef,
    sendCode,
    sendEmail,
    sendQuery,
    setSendEmail,
    codeError,
    codeRef,
    mutateQuery,
    confirm,
    prevHandler,
  };
}
