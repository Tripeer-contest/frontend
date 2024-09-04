import { useEffect, useState } from 'react';
import zustandStore from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';

export default function useUnreadChat() {
  const [haveNewChat, setHaveNewChat] = useState(false);
  const [page, connected, doc] = zustandStore(
    useShallow((state) => [state.room_page, state.y_connected, state.y_doc]),
  );

  useEffect(() => {
    if (connected && doc && page) {
      const YChat = doc.getArray('chatInfo');
      YChat.observe(() => {
        if (page) setHaveNewChat(true);
      });
    }
    if (page === 0) setHaveNewChat(false);
  }, [connected, doc, page]);

  return haveNewChat;
}