import { useState } from 'react';
import styles from '../../assets/chat/chatbox.module.css';
import useChatScroll from '../../hooks/useChatScroll';
import ChatContent from './ChatContent';
import ChatTextArea from './ChatTextArea';
import ChatUtil from './ChatUtil';
import ChatPreview from './ChatPreview';

export default function ChatBox() {
  const { onScroll, scrollRef } = useChatScroll();
  const [isChatNow, setIsChatNow] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.chatInfo} ref={scrollRef} onScroll={onScroll}>
        <ChatContent />
      </div>
      <ChatPreview />
      <ChatUtil isChatNow={isChatNow} />
      <ChatTextArea setIsChatNow={setIsChatNow} />
    </div>
  );
}
