import { useRef, useState } from 'react';
import styles from '../assets/register.module.css';
import { useMutateSignUp } from '../hook/useSendQuery';
import { Register } from './RegisterPage';
import { useNavigate } from 'react-router-dom';
import MutationLoading from '../../../components/loading/MutationLoading';

export default function TripeerRegisterPassword({
  registerInfo,
}: {
  registerInfo: Register;
}) {
  const [invalidInput, setInValidInput] = useState(false);
  const [notSameInput, setNotSameInput] = useState(false);
  const { isError, isPending, mutateAsync } = useMutateSignUp();
  const navigate = useNavigate();
  const inputRef = useRef<null | HTMLInputElement>(null);
  const confirmRef = useRef<null | HTMLInputElement>(null);
  const passwordChcek = () => {
    const reg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    const password = inputRef.current ? inputRef.current.value : '';
    return reg.test(password) ? password : '';
  };

  const sameChek = () => {
    const inputValue = inputRef.current ? inputRef.current.value : '';
    const checkValue = confirmRef.current ? confirmRef.current.value : '';
    return inputValue === checkValue;
  };

  const regist = async () => {
    const validPassword = passwordChcek();
    if (validPassword) {
      setInValidInput(false);
      if (sameChek()) {
        setNotSameInput(false);
        await mutateAsync({
          ...registerInfo,
          password: validPassword,
        });
        navigate('/home');
      } else {
        setNotSameInput(true);
      }
    } else {
      setInValidInput(true);
      setNotSameInput(false);
    }
  };
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
      <MutationLoading isShow={isPending} />
    </>
  );
}
