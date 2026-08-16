import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../store/store';
import styles from '../../assets/chat/util.module.css';

export default function ChatUtil({ isChatNow }: { isChatNow: boolean }) {
  const [isBottom, scrollToBottom] = zustandStore(
    useShallow((state) => [
      state.room_chatScrollIsBottom,
      state.room_chatScrollToBottom,
    ]),
  );
  const handleScrollToBottom = () => {
    if (scrollToBottom) scrollToBottom();
  };

  return (
    <>
      {!isBottom && !isChatNow ? (
        <aside className={styles.container} onClick={handleScrollToBottom}>
          <p>&darr;</p>
        </aside>
      ) : undefined}
    </>
  );
}
