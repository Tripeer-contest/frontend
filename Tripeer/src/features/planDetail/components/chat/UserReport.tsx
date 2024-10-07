import styles from '../../assets/chat/content.module.css';
import cancelIcon from '../../../../assets/button/cancel_gray.svg';
import { handleErrorImg } from '../../../../data/defaultImg';
import { useEffect, useRef, useState } from 'react';
import Notify from '../notify/Notify';
import tripeer_icon from '../../../../assets/tripeer_icon.webp';

interface ReportInterface {
  userImg: string;
  nickname: string;
  close: () => void;
}

export default function UserReport({
  close,
  nickname,
  userImg,
}: ReportInterface) {
  const [isDeclare, setIsDeclare] = useState(false);
  const timerRef = useRef(0);
  const declarationHandler = () => {
    setIsDeclare(true);
  };
  useEffect(() => {
    if (isDeclare) {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        setIsDeclare(false);
      }, 2000);
    }
  }, [isDeclare]);
  return (
    <>
      <img
        src={cancelIcon}
        alt="cancel-icon"
        className={styles.cancel}
        onClick={close}
      />
      <div className={styles.modalBox}>
        <img
          src={userImg}
          alt="profile-image"
          className={styles.modalProfile}
          onError={handleErrorImg}
        />
        <p className={styles.modalNickname}>{nickname}</p>
        <div className={styles.line} />
        <button className={styles.alert} onClick={declarationHandler}>
          신고하기
        </button>
      </div>
      <Notify
        isActive={isDeclare}
        message="신고가 완료되었습니다."
        title="알림"
        img={tripeer_icon}
      />
    </>
  );
}
