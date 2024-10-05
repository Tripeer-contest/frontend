import styles from '../assets/register.module.css';

export default function TripeerEmailError({
  emailValideError,
  codeError,
  sendData,
  sendError,
  mutateError,
}: {
  emailValideError: boolean;
  codeError: boolean;
  sendData: any;
  sendError: boolean;
  mutateError: boolean;
}) {
  return (
    <>
      {emailValideError && (
        <p className={styles.warnText}>올바른 형식의 이메일이 아닙니다.</p>
      )}
      {sendData && !sendData.data && (
        <p className={styles.warnText}>
          중복된 이메일이거나 잘못된 이메일 양식입니다.
        </p>
      )}
      {(sendError || mutateError) && (
        <p className={styles.warnText}>
          네트워크가 불안정합니다. 잠시 후 다시 시도해주세요.
        </p>
      )}
      {codeError && <p className={styles.warnText}>잘못된 인증 코드입니다.</p>}
    </>
  );
}
