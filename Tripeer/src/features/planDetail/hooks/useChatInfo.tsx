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
    const chatSomething = () => {
      const YChatInfo = doc?.getArray<ChatInterface[]>('chatInfo');
      if (YChatInfo) {
        const newChatInfo = YChatInfo.toJSON();
        setChatInfo(newChatInfo);
      }
    };
    if (isConnected) {
      const YChatInfo = doc?.getArray<ChatInterface[]>('chatInfo');
      const readMap = doc?.getMap('readMessage');
      if (YChatInfo && readMap) {
        const chatInfo = YChatInfo?.toJSON();
        setChatInfo(chatInfo);
        YChatInfo.observe(chatSomething);
      }
    }

    return () => {
      if (isConnected) doc?.getArray('chatInfo').unobserve(chatSomething);
    };
  }, [isConnected, doc]);

  useEffect(() => {
    if (chatInfo) setRenderCnt((prev) => prev + 1);
  }, [chatInfo]);

  return { chatInfo, renderCnt };
}