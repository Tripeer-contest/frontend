import useModal from '../../../../hooks/useModal';
import { OnlineInfo } from '../../../../store/room/RoomSliceState';
import { ChatInterface } from '../../../../types/PlanDetailTypes';
import styles from '../../assets/chat/content.module.css';
import { getChatDateString } from '../../../../utils/utilDate';
import { handleErrorImg } from '../../../../data/defaultImg';
import UserReport from './UserReport';

export default function OtherChat({
  chat,
  user,
}: {
  chat: ChatInterface;
  user: OnlineInfo;
}) {
  const { open, ModalLayout, close } = useModal();

  return (
    <div className={styles.chatContainer}>
      <div className={styles.profileBox} onClick={open}>
        <img
          src={user?.profileImage}
          alt="profile-image"
          className={styles.profileImg}
          onError={handleErrorImg}
        />
        <div className={user?.isOnline ? styles.online : styles.offline} />
      </div>
      <div className={styles.chat}>
        <p onClick={open}>{user?.nickname}</p>
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
      <ModalLayout
        className={styles.desktop}
        onClick={(e) => {
          e.currentTarget === e.target && close();
        }}
      >
        <UserReport
          close={close}
          nickname={user ? user.nickname : '...'}
          userImg={user ? user.profileImage : ''}
        />
      </ModalLayout>
    </div>
  );
}
