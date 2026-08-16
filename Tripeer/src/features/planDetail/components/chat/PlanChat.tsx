import styles from '../../assets/chat/chat.module.css';
import PlanFullNav from '../PlanFullNav';
import ChatBox from './ChatBox';
import ChatHeader from './ChatHeader';
import ChatInfo from './ChatInfo';

export default function PlanChat() {
  return (
    <main className={styles.container}>
      <aside className={styles.nav}>
        <PlanFullNav />
      </aside>
      <section className={styles.chatBox}>
        <ChatHeader />
        <div className={styles.contentBox}>
          <ChatBox />
          <ChatInfo />
        </div>
      </section>
    </main>
  );
}
