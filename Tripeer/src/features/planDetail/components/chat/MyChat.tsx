import { ChatInterface } from '../../../../types/PlanDetailTypes';
import { getChatDateString } from '../../../../utils/utilDate';
import styles from '../../assets/chat/content.module.css';

export default function MyChat({ chat }: { chat: ChatInterface }) {
  return (
    <div className={styles.chatMyConatiner}>
      <div className={styles.myChat}>
        <p className={styles.myMessage}>{chat.message}</p>
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
    </div>
  );
}
