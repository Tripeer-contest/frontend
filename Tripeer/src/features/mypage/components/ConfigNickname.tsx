import { Dispatch, SetStateAction } from 'react';
import styles from '../assets/config/nickname.module.css';
import MutationLoading from '../../../components/loading/MutationLoading';
import Notify from '../../planDetail/components/notify/Notify';
import warn_icon from '../../../assets/error/warn.svg';
import tripeer_icon from '../../../assets/tripeer_icon.webp';
import { ProfileFormType } from '../../../types/UserTypes';
import useNickValidate from '../hooks/useNickValidate';

export default function ConfigNickname({
  setForm,
}: {
  setForm: Dispatch<SetStateAction<ProfileFormType>>;
}) {
  const { changeHandler, duplicate, duplicateCheck, nick, warn } =
    useNickValidate(setForm);

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
