import { ChangeEvent, useState } from 'react';
import styles from '../assets/config/nickname.module.css';
import useMyInfoQuery, { useDuplicateQuery } from '../hooks/useMyInfoQuery';
import MutationLoading from '../../../components/loading/MutationLoading';
import Notify from '../../planDetail/components/notify/Notify';
import warn_icon from '../../../assets/error/warn.svg';
import tripeer_icon from '../../../assets/tripeer_icon.webp';

export default function ConfigNickname() {
  const { data } = useMyInfoQuery();
  const [nick, setNick] = useState(data.nickname);
  const [warn, setWarn] = useState(false);
  const [getRequest, setGetRequest] = useState(false);
  const duplicate = useDuplicateQuery(nick, getRequest, setGetRequest);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const typing = e.target.value;
    const regExp = /[^a-zA-Z0-9가-힣]/;
    if (regExp.test(typing) || typing.length < 2 || typing.length > 10) {
      setWarn(true);
    } else {
      setWarn(false);
    }
    setNick(e.target.value);
  };

  const duplicateCheck = () => {
    if (nick === data.nickname) return;
    setGetRequest(true);
  };

  return (
    <>
      <div className={styles.gridBox}>
        <p className={styles.subTitle}>닉네임</p>
        <div className={styles.nicknameBox}>
          <input
            type="text"
            className={
              (duplicate.isSuccess && duplicate.data) || warn
                ? styles.duplicateInput
                : styles.nicknameInput
            }
            value={nick}
            onChange={changeHandler}
          />
          <div className={styles.duplicateBtn} onClick={duplicateCheck}>
            중복확인
          </div>
        </div>
      </div>
      <Notify
        message="닉네임이 중복되었습니다."
        isActive={duplicate.isSuccess && duplicate.data}
        title="알림"
        img={warn_icon}
      />
      <Notify
        message="잘못된 닉네임 형식입니다."
        isActive={warn}
        title="알림"
        img={warn_icon}
      />
      <Notify
        message="사용 가능한 닉네임입니다."
        isActive={duplicate.isSuccess && !duplicate.data}
        title="알림"
        img={tripeer_icon}
      />
      <MutationLoading isShow={duplicate.isLoading} />
    </>
  );
}
