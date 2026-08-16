import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { Register } from './RegisterPage';
import styles from '../assets/register.module.css';
import { useMutateNick } from '../hook/useSendQuery';
import MutationLoading from '../../../components/loading/MutationLoading';

export default function TripeerRegisterNickname({
  setNickname,
}: {
  setNickname: Dispatch<SetStateAction<Register>>;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [nickWarn, setNickWarn] = useState(false);
  const [duplicateWarn, setDuplicateWarn] = useState(false);

  const { mutateAsync, isError, isPending } = useMutateNick();
  const checkNick = async () => {
    const reg = /^(?!.*(?:admin|test))[a-zA-Z0-9가-힣]{2,10}$/;
    const input = inputRef.current ? inputRef.current.value : '';
    const result = reg.test(input);
    if (result) {
      setNickWarn(false);
      const res = await mutateAsync(input);
      if (res) {
        !res.data
          ? setNickname((prev) => ({ ...prev, nickname: input }))
          : setDuplicateWarn(true);
      }
    } else {
      setNickWarn(true);
    }
  };

  return (
    <>
      <h3 className={styles.title}>닉네임을 입력해주세요.</h3>
      <div className={styles.inputEmailBox}>
        <input
          type="text"
          placeholder="10글자 내로 입력하세요."
          className={styles.inputBox}
          ref={inputRef}
          onKeyUp={(e) => {
            e.key === 'Enter' && checkNick();
          }}
        />
        {nickWarn && (
          <p className={styles.warnText}>잘못된 형식의 닉네임입니다.</p>
        )}
        {duplicateWarn && (
          <p className={styles.warnText}>중복된 닉네임입니다.</p>
        )}
        {isError && (
          <p className={styles.warnText}>
            네트워크가 불안정합니다. 잠시 후 다시 시도해주세요.
          </p>
        )}
      </div>
      <button className={styles.inputBtn} onClick={checkNick}>
        다음
      </button>
      <p className={styles.infoText}>
        * 닉네임은 2~10자로 구성, 특수 기호는 활용할 수 없습니다.
      </p>
      <MutationLoading isShow={isPending} />
    </>
  );
}
