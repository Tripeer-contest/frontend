import { useEffect, useState } from 'react';
import { ChatInterface } from '../../../types/PlanDetailTypes';
import zustandStore from '../../../store/store';

export default function useChatInfo() {
  const [renderCnt, setRenderCnt] = useState(0);
  const [chatInfo, setChatInfo] = useState<ChatInterface[]>([]);
  const doc = zustandStore((state) => state.y_doc);

  useEffect(() => {
    const chatSomething = () => {
      const YChatInfo = doc?.getArray<ChatInterface[]>('chatInfo');
      if (YChatInfo) {
        const newChatInfo = YChatInfo.toJSON();
        setChatInfo(newChatInfo);
      }
    };
    const YChatInfo = doc?.getArray<ChatInterface[]>('chatInfo');
    const readMap = doc?.getMap('readMessage');
    if (YChatInfo && readMap) {
      const chatInfo = YChatInfo?.toJSON();
      setChatInfo(chatInfo);
      YChatInfo.observe(chatSomething);
    }

    return () => {
      doc?.getArray('chatInfo').unobserve(chatSomething);
    };
  }, [doc]);

  useEffect(() => {
    if (chatInfo) setRenderCnt((prev) => prev + 1);
  }, [chatInfo]);

  return { chatInfo, renderCnt };
}
