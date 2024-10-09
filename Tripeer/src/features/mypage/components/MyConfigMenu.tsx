import styles from '../assets/config.module.css';
import ConfigNickname from './ConfigNickname';
import ConfigStyle from './ConfigStyle';
import ConfigImage from './ConfigImage';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ProfileFormType } from '../../../types/UserTypes';
import Notify from '../../planDetail/components/notify/Notify';
import warn_icon from '../../../assets/error/warn.svg';
import { usePatchProfile } from '../hooks/useMyInfoQuery';
import MutationLoading from '../../../components/loading/MutationLoading';
import logo_icon from '../../../assets/tripeer_icon.webp';

export default function MyConfigMenu() {
  const navigate = useNavigate();
  const [form, setForm] = useState<ProfileFormType>({
    nickname: '',
    nickWarn: false,
    style: [],
    styleWarn: false,
  });
  const [warn, setWarn] = useState(false);
  const { mutate, isPending, error, isError, isSuccess } = usePatchProfile();
  const cancelHandler = () => {
    navigate('/mypage');
  };

  const clickHandler = () => {
    if (form.nickWarn || form.styleWarn) setWarn(true);
    else {
      setWarn(false);
      mutate({ nickname: form.nickname, styles: form.style });
    }
  };
  return (
    <>
      <main className={styles.container}>
        <div className={styles.aboutBox}>
          <ConfigImage />
          <div className={styles.contentBox}>
            <ConfigNickname setForm={setForm} />
            <ConfigStyle setForm={setForm} />
          </div>
        </div>
        <div className={styles.btnBox}>
          <div onClick={cancelHandler}>취소</div>
          <div onClick={clickHandler}>수정 완료</div>
        </div>
      </main>
      <MutationLoading isShow={isPending} />
      <Notify
        isActive={isSuccess}
        message="정보를 변경하였습니다."
        title="알림"
        img={logo_icon}
      />
      <Notify
        isActive={isError}
        message={error?.message ? error.message : '에러가 발생하였습니다.'}
        title="알림"
        img={warn_icon}
      />
      <Notify
        isActive={warn}
        message="항목의 조건들을 모두 채워주세요."
        title="알림"
        img={warn_icon}
      />
    </>
  );
}
