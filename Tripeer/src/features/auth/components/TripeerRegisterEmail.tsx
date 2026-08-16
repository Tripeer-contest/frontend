import styles from '../assets/register.module.css';
import MutationLoading from '../../../components/loading/MutationLoading';
import TripeerEmailError from './TripeerEmailError';
import { EmailHook } from '../types/authType';

export default function TripeerRegisterEmail({
  customHook,
}: {
  customHook: EmailHook;
}) {
  const {
    codeError,
    confirm,
    emailValideError,
    inputRef,
    mutateQuery,
    prevHandler,
    sendCode,
    sendEmail,
    sendQuery,
    setSendEmail,
    codeRef,
  } = customHook;

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
        <TripeerEmailError
          codeError={codeError}
          emailValideError={emailValideError}
          mutateError={mutateQuery.isError}
          sendData={sendQuery.data}
          sendError={sendQuery.isError}
        />
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
