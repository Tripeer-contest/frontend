import styles from '../assets/register.module.css';

export default function TripeerPasswordError({
  invalidInput,
  isError,
  notSameInput,
}: {
  invalidInput: boolean;
  notSameInput: boolean;
  isError: boolean;
}) {
  return (
    <>
      {invalidInput && (
        <p className={styles.warnText}>
          비밀번호는 8~20자, 대소문자, 특수문자를 모두 포함하여야 합니다.
        </p>
      )}
      {notSameInput && (
        <p className={styles.warnText}>
          비밀번호의 확인란이 일치하지 않습니다.
        </p>
      )}
      {isError && (
        <p className={styles.warnText}>
          네트워크가 불안정합니다. 잠시 후 다시 요청해주세요.
        </p>
      )}
    </>
  );
}
