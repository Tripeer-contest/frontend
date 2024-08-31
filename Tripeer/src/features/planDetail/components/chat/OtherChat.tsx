import { OnlineInfo } from '../../../../store/room/RoomSliceState';
import { ChatInterface } from '../../../../types/PlanDetailTypes';
import styles from '../../assets/chat/content.module.css';

export default function OtherChat({
  chat,
  user,
}: {
  chat: ChatInterface;
  user: OnlineInfo;
}) {
  return (
    <div className={styles.chatContainer}>
      <img
        src={user?.profileImage}
        alt="profile-image"
        className={styles.profileImg}
      />
      <div className={styles.chat}>
        <p>{user?.nickname}</p>
        <p className={styles.message}>{chat.message}</p>
        <p className={styles.date}>{`오후 ${chat.hours}:${chat.minutes}`}</p>
      </div>
    </div>
  );
}
