import styles from '../../assets/chat/header.module.css';
import zustandStore from '../../../../store/store';
import PlanHamburger from '../common/PlanHamburger';
import ChatModalInfo from './ChatModalInfo';

export default function ChatHeader() {
  const planTitle = zustandStore((state) => state.room_title);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.funcBox}>
          <PlanHamburger />
          <p>{planTitle}</p>
        </div>
        <ChatModalInfo />
      </header>
    </>
  );
}
