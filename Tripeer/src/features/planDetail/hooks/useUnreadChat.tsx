import { useEffect, useState } from 'react';
import zustandStore from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';

export default function useUnreadChat() {
  const [haveNewChat, setHaveNewChat] = useState(false);
  const [page, doc] = zustandStore(
    useShallow((state) => [state.room_page, state.y_doc]),
  );

  useEffect(() => {
    if (doc && page) {
      const YChat = doc.getArray('chatInfo');
      YChat.observe(() => {
        if (page) setHaveNewChat(true);
      });
    }
    if (page === 0) setHaveNewChat(false);
  }, [doc, page]);

  return haveNewChat;
}
