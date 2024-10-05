import styles from '../assets/register.module.css';
import MutationLoading from '../../../components/loading/MutationLoading';
import TripeerPasswordError from './TripeerPasswordError';
import { PasswordHook } from '../types/authType';

export default function TripeerRegisterPassword({
  customHook,
}: {
  customHook: PasswordHook;
}) {
  const {
    confirmRef,
    inputRef,
    invalidInput,
    isError,
    isPending,
    notSameInput,
    regist,
  } = customHook;

  return (
    <>
      <h3 className={styles.title}>비밀번호를 입력해주세요.</h3>
      <div className={styles.inputEmailBox}>
        <input
          type="password"
          placeholder="비밀번호"
          className={styles.inputBox}
          ref={inputRef}
        />
      </div>
      <div className={styles.inputEmailBox}>
        <input
          type="password"
          placeholder="비밀번호 재확인"
          className={styles.inputBox}
          ref={confirmRef}
        />
      </div>
      <button className={styles.inputBtn} onClick={regist}>
        회원가입
      </button>
      <TripeerPasswordError
        invalidInput={invalidInput}
        isError={isError}
        notSameInput={notSameInput}
      />
      <MutationLoading isShow={isPending} />
    </>
  );
}
