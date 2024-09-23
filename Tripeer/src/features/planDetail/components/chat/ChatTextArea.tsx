import styles from '../../assets/chat/textarea.module.css';
import sendIcon from '../../assets/icon/send.svg';

import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import useSendChat from '../../hooks/useSendChat';
import zustandStore from '../../../../store/store';

export default function ChatTextArea({
  setIsChatNow,
}: {
  setIsChatNow: (chat: boolean) => void;
}) {
  const [timeoutId, setId] = useState<NodeJS.Timeout | null>(null);
  const scrollToBottom = zustandStore((state) => state.room_chatScrollToBottom);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const { sendMessage } = useSendChat();

  const handleDoingChat = (elem: HTMLTextAreaElement) => {
    if (elem.value.length > 30) {
      setIsChatNow(true);
    } else {
      setIsChatNow(false);
    }
  };

  const handleToBottom = () => {
    if (timeoutId) clearTimeout(timeoutId);
    const id = setTimeout(() => {
      if (scrollToBottom) scrollToBottom();
    }, 300);
    setId(id);
  };

  const handleChange = () => {
    if (textRef.current) {
      textRef.current.style.height = '30px';
      const height = textRef.current.scrollHeight;
      textRef.current.style.height = `${height}px`;
      handleDoingChat(textRef.current);
    }
  };

  const handleSendMessage = () => {
    if (textRef.current && textRef.current.value) {
      sendMessage(textRef.current.value);
      textRef.current.value = '';
      handleChange();
      handleToBottom();
    }
  };

  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <form className={styles.inputBox} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.layout}>
        <textarea
          onChange={handleChange}
          ref={textRef}
          placeholder="메세지를 작성해주세요."
          className={styles.input}
          maxLength={1000}
          onKeyDown={handleEnter}
        />
        <button className={styles.sendBtn} onClick={handleSendMessage}>
          <img src={sendIcon} alt="send-icon" />
        </button>
      </div>
      <div style={{ height: '20px' }}></div>
    </form>
  );
}
