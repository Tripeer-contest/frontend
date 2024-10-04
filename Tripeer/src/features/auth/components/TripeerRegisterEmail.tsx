import { Dispatch, SetStateAction, useRef, useState } from 'react';
import styles from '../assets/register.module.css';
import { Register } from './RegisterPage';
import useSendEmailQuery, { useMutateEmail } from '../hook/useSendQuery';
import MutationLoading from '../../../components/loading/MutationLoading';

export default function TripeerRegisterEmail({
  setEmail,
}: {
  setEmail: Dispatch<SetStateAction<Register>>;
}) {
  const [emailValideError, setEmailValideError] = useState(false);
  const [codeError, setCodeError] = useState(false);
  const [sendEmail, setSendEmail] = useState('');
  const sendQuery = useSendEmailQuery();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const codeRef = useRef<HTMLInputElement | null>(null);
  const mutateQuery = useMutateEmail();
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
      sendQuery.mutate(validEmail);
    } else {
      setEmailValideError(true);
    }
  };
  const confirm = async () => {
    const code = codeRef.current ? codeRef.current.value : '';
    const res = await mutateQuery.mutateAsync({ email: sendEmail, code: code });
    if (res) {
      res.data
        ? setEmail((prev) => ({ ...prev, email: sendEmail, code: code }))
        : setCodeError(true);
    }
  };
  const prevHandler = () => {
    setEmail((prev) => ({
      nickname: prev.nickname,
      year: prev.year,
      month: prev.month,
      day: prev.day,
    }));
  };

  return (
    <>
      <h3 className={styles.title}>이메일을 입력해주세요.</h3>
      <div className={styles.inputEmailBox}>
        <input
          type="text"
          placeholder="이메일"
          className={styles.inputBox}
          ref={inputRef}
          onKeyUp={(e) => {
            e.key === 'Enter' && sendCode();
          }}
          onChange={() => setSendEmail('')}
        />
        {sendEmail &&
          !sendQuery.isError &&
          sendQuery.data &&
          sendQuery.data.data && (
            <input
              type="text"
              placeholder="코드 입력"
              className={styles.inputBox}
              ref={codeRef}
            />
          )}
        {emailValideError && (
          <p className={styles.warnText}>올바른 형식의 이메일이 아닙니다.</p>
        )}
        {sendQuery.data && !sendQuery.data.data && (
          <p className={styles.warnText}>
            중복된 이메일이거나 잘못된 이메일 양식입니다.
          </p>
        )}
        {(sendQuery.isError || mutateQuery.isError) && (
          <p className={styles.warnText}>
            네트워크가 불안정합니다. 잠시 후 다시 시도해주세요.
          </p>
        )}
        {codeError && (
          <p className={styles.warnText}>잘못된 인증 코드입니다.</p>
        )}
      </div>
      <div className={styles.btnBox}>
        <button className={styles.prevBtn} onClick={prevHandler}>
          이전
        </button>
        {!sendEmail ||
        !sendQuery.data ||
        !sendQuery.data.data ||
        sendQuery.isError ? (
          <button className={styles.nextBtn} onClick={sendCode}>
            코드 전송
          </button>
        ) : (
          <button className={styles.nextBtn} onClick={confirm}>
            인증 하기
          </button>
        )}
      </div>
      <MutationLoading isShow={sendQuery.isPending || mutateQuery.isPending} />
    </>
  );
}
