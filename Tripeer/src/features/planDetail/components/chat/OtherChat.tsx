import useModal from '../../../../hooks/useModal';
import { OnlineInfo } from '../../../../store/room/RoomSliceState';
import { ChatInterface } from '../../../../types/PlanDetailTypes';
import styles from '../../assets/chat/content.module.css';
import cancelIcon from '../../../../assets/button/cancel_gray.svg';
import { getChatDateString } from '../../../../utils/utilDate';

export default function OtherChat({
  chat,
  user,
}: {
  chat: ChatInterface;
  user: OnlineInfo;
}) {
  const DesktopModal = useModal();
  return (
    <div className={styles.chatContainer}>
      <div className={styles.profileBox} onClick={DesktopModal.open}>
        <img
          src={user?.profileImage}
          alt="profile-image"
          className={styles.profileImg}
        />
        <div className={user?.isOnline ? styles.online : styles.offline} />
      </div>
      <div className={styles.chat}>
        <p onClick={DesktopModal.open}>{user?.nickname}</p>
        <p className={styles.message}>{chat.message}</p>
        <p className={styles.date}>
          {getChatDateString(
            chat.year,
            chat.month,
            chat.day,
            chat.hours,
            chat.minutes,
            chat.amOrPm,
          )}
        </p>
      </div>
      <DesktopModal.ModalLayout className={styles.desktop}>
        <img
          src={cancelIcon}
          alt="cancel-icon"
          className={styles.cancel}
          onClick={DesktopModal.close}
        />
        <div className={styles.modalBox}>
          <img
            src={user?.profileImage}
            alt="profile-image"
            className={styles.modalProfile}
          />
          <p className={styles.modalNickname}>{user?.nickname}</p>
          <div className={styles.line} />
          <button className={styles.alert}>신고하기</button>
        </div>
      </DesktopModal.ModalLayout>
    </div>
  );
}
