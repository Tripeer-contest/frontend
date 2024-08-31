import { useEffect, useState } from 'react';
import { ChatInterface } from '../../../types/PlanDetailTypes';
import zustandStore from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';

export default function useChatInfo() {
  const [renderCnt, setRenderCnt] = useState(0);
  const [chatInfo, setChatInfo] = useState<ChatInterface[]>([]);
  const [doc, isConnected] = zustandStore(
    useShallow((state) => [state.y_doc, state.y_connected]),
  );

  useEffect(() => {
    if (isConnected) {
      const YChatInfo = doc?.getArray('chatInfo');
      if (YChatInfo) {
        const chatInfo = YChatInfo?.toJSON() as ChatInterface[];
        setChatInfo(chatInfo);
        YChatInfo.observe(() => {
          const newChatInfo = YChatInfo.toJSON() as ChatInterface[];
          setChatInfo(newChatInfo);
        });
      }
    }
  }, [isConnected, doc]);

  useEffect(() => {
    if (chatInfo) setRenderCnt((prev) => prev + 1);
  }, [chatInfo]);

  return { chatInfo, renderCnt };
}
