import { useNavigate } from 'react-router-dom';
import styles from '../assets/menu.module.css';
import useMyInfoQuery, { useMessageMutate } from '../hooks/useMyInfoQuery';
import MyMainBtn from './button/MyMainBtn';
import MySubBtn from './button/MySubBtn';
import useClipBoard from '../../../hooks/useClipBoard';
import cookie from 'js-cookie';
import useFCM from '../../../hooks/useFCM';
import { useRef, useState } from 'react';
import { isMobileCorrectly } from '../../../utils/checkMobile';
import MutationLoading from '../../../components/loading/MutationLoading';
import Notify from '../../planDetail/components/notify/Notify';
import warn_icon from '../../../assets/error/warn.svg';
import { setFlutterToSendPermission } from '../../../utils/sendFlutter';
import { handleErrorImg } from '../../../data/defaultImg';

export default function MyPageMenu() {
  const { data } = useMyInfoQuery();
  const [isLoading, setIsLoading] = useState(false);
  const [occuredError, setOccuredError] = useState(false);
  const { connectFCM, isSuccess, connectFlutterFcm } = useFCM();
  const { mutateAsync, isError } = useMessageMutate();
  const navigate = useNavigate();
  const { isClip, saveClipBoard } = useClipBoard('https://tripeer.co.kr');
  const showClipConfirm = () => {
    return isClip ? styles.clipConfirm : styles.disappear;
  };
  const [notGranted, setNotGranted] = useState(false);
  const grantRef = useRef<number | null>(null);
  const timerRef = useRef<number | null>(null);
  const logout = () => {
    cookie.remove('Authorization');
    navigate('/');
  };

  const errorHandler = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setOccuredError(true);
    const id = window.setTimeout(() => {
      setOccuredError(false);
    }, 2000);
    timerRef.current = id;
  };

  const grantedHandler = () => {
    if (grantRef.current) {
      clearTimeout(grantRef.current);
      grantRef.current = null;
    }
    setNotGranted(true);
    const id = window.setTimeout(() => {
      setNotGranted(false);
    }, 2000);
    grantRef.current = id;
  };

  const pushHandler = async () => {
    setIsLoading(true);
    if (data.allowNotifications && isSuccess) {
      await mutateAsync(false);
    } else {
      if (isMobileCorrectly()) {
        const permission = await setFlutterToSendPermission();
        if (!permission) {
          grantedHandler();
        } else {
          try {
            await connectFlutterFcm();
            await mutateAsync(true);
          } catch {
            errorHandler();
          }
        }
      } else {
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') {
          grantedHandler();
        } else {
          try {
            await connectFCM();
            await mutateAsync(true);
          } catch {
            errorHandler();
          }
        }
      }
    }

    setIsLoading(false);
  };
  return (
    <>
      <main className={styles.container}>
        <div className={styles.imgBox}>
          <img
            src={data.profileImage}
            alt="profile-img"
            className={styles.profileImg}
            onError={handleErrorImg}
          />
          <p className={styles.nickname}>{data.nickname}</p>
        </div>
        <MyMainBtn
          name="내 정보 수정"
          clickHandler={() => navigate('./edit')}
        />
        <div className={styles.part}>
          <h3 className={styles.subTitle}>고객지원</h3>
          <MySubBtn name="공지사항" clickHandler={() => navigate('./notice')} />
          <MySubBtn name="초대링크 복사하기" clickHandler={saveClipBoard} />
        </div>
        <div className={styles.part}>
          <h3 className={styles.subTitle}>알림설정</h3>
          <div className={styles.subBtn} onClick={pushHandler}>
            <span>여행 소식 알림</span>
            <div
              className={styles.pushBtn}
              style={{
                backgroundColor:
                  isSuccess && data.allowNotifications ? '#04ACB5' : '#d9d9d9',
              }}
            >
              <div
                className={styles.push}
                style={{
                  left: isSuccess && data.allowNotifications ? '30px' : '5px',
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.part}>
          <h3 className={styles.subTitle}>계정 설정</h3>
          <MySubBtn
            name="개인정보 처리 방침"
            clickHandler={() => navigate('/privacy')}
          />
          <MySubBtn name="로그아웃" clickHandler={logout} />
        </div>
      </main>
      <p className={showClipConfirm()}>클립보드에 복사가 완료되었습니다.</p>
      <MutationLoading isShow={isLoading} />
      <Notify
        img={warn_icon}
        title="에러"
        message="네트워크 요청이 불안정합니다."
        isActive={isError || occuredError}
      />
      <Notify
        img={warn_icon}
        title="에러"
        message="기기 알림 권한을 수락해주세요.."
        isActive={notGranted}
      />
    </>
  );
}
