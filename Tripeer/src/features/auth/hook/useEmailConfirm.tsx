import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { useMutateEmail } from './useSendQuery';
import { Register } from '../components/RegisterPage';

export default function useEmailConfirm(
  sendEmail: string,
  setter: Dispatch<SetStateAction<Register>>,
  url: string,
) {
  const [codeError, setCodeError] = useState(false);

  const codeRef = useRef<HTMLInputElement | null>(null);

  const mutateQuery = useMutateEmail();

  const confirm = async () => {
    const code = codeRef.current ? codeRef.current.value : '';
    const res = await mutateQuery.mutateAsync({
      email: sendEmail,
      code: code,
      url: url,
    });
    if (res) {
      res.data
        ? setter((prev) => ({ ...prev, email: sendEmail, code: code }))
        : setCodeError(true);
    }
  };

  return {
    mutateQuery,
    codeError,
    codeRef,
    confirm,
  };
}
