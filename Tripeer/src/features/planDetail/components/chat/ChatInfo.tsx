import styles from '../../assets/chat/info.module.css';
import MemberInfo from './MemberInfo';
import TripInfo from './TripInfo';

export default function ChatInfo() {
  return (
    <section className={styles.container}>
      <TripInfo />
      <MemberInfo />
    </section>
  );
}
