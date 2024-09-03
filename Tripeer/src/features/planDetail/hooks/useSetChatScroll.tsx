import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store';
import { useEffect, useRef } from 'react';

export default function useSetChatScroll(renderCnt: number) {
  const prevRender = useRef(0);

  const [scrollToBottom, isBottom] = zustandStore(
    useShallow((state) => [
      state.room_chatScrollToBottom,
      state.room_chatScrollIsBottom,
      state.y_ws,
    ]),
  );

  useEffect(() => {
    if (scrollToBottom && renderCnt === 1) {
      scrollToBottom();
      prevRender.current = renderCnt;
    }
    if (isBottom && prevRender.current < renderCnt && scrollToBottom) {
      scrollToBottom();
      prevRender.current = renderCnt;
    }
  }, [scrollToBottom, renderCnt, isBottom]);
}
