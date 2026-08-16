import { useRef, useState } from 'react';
import useSendEmailQuery from './useSendQuery';

export default function useSendEmail(url: string) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [emailValideError, setEmailValideError] = useState(false);
  const sendQuery = useSendEmailQuery();
  const [sendEmail, setSendEmail] = useState('');

  const emailCheck = () => {
    const reg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const email = inputRef.current ? inputRef.current.value : '';
    return reg.test(email) ? email : '';
  };
  const sendCode = () => {
    const validEmail = emailCheck();
    if (validEmail) {
      setEmailValideError(false);
      setSendEmail(validEmail);
      sendQuery.mutate({ url: url, email: validEmail });
    } else {
      setEmailValideError(true);
    }
  };
  return {
    inputRef,
    sendCode,
    setSendEmail,
    sendEmail,
    sendQuery,
    emailValideError,
  };
}
