import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../store/store';
import styles from '../../assets/chat/preview.module.css';
import { useEffect, useState } from 'react';
import getTokenInfo from '../../../../utils/jwtDecode';

export default function ChatPreview() {
  const [lastMessage, setLastMessage] = useState('');
  const [isBottom, doc, scrollToBottom] = zustandStore(
    useShallow((state) => [
      state.room_chatScrollIsBottom,
      state.y_doc,
      state.room_chatScrollToBottom,
    ]),
  );

  const clickHandler = () => {
    scrollToBottom && scrollToBottom();
  };

  useEffect(() => {
    if (doc) {
      const YChatInfo = doc.getArray('chatInfo');
      const myInfo = getTokenInfo();
      YChatInfo.observe(() => {
        const lastChat = YChatInfo.toJSON()[YChatInfo.length - 1];
        if (lastChat.message && myInfo.userId !== lastChat.userId) {
          setLastMessage(lastChat.message);
        }
      });
    }
  }, [doc, isBottom]);

  useEffect(() => {
    if (isBottom) setLastMessage('');
  }, [isBottom]);

  return (
    <>
      {lastMessage.length > 0 ? (
        <aside className={styles.container} onClick={clickHandler}>
          <p>새로운 메시지 : {lastMessage}</p>
        </aside>
      ) : undefined}
    </>
  );
}
