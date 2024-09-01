import { ChatInterface } from '../../../../types/PlanDetailTypes';
import styles from '../../assets/chat/content.module.css';

export default function MyChat({ chat }: { chat: ChatInterface }) {
  return (
    <div className={styles.chatMyConatiner}>
      <div className={styles.myChat}>
        <p className={styles.myMessage}>{chat.message}</p>
        <p className={styles.date}>{`오후 ${chat.hours}:${chat.minutes}`}</p>
      </div>
    </div>
  );
}
