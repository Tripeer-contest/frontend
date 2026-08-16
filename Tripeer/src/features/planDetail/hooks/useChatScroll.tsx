import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store';
import { UIEvent, useCallback } from 'react';

export default function useChatScroll() {
  const [setIsBottom, setScrollFn, setScrollToBottomFn] = zustandStore(
    useShallow((state) => [
      state.room_setChatScrollIsBottom,
      state.room_chatSetScrollFn,
      state.room_chatSetScrollToBottom,
    ]),
  );

  const isScrollNearBottom = useCallback(
    (element: HTMLElement, offset = 30) => {
      return (
        element.scrollHeight - element.scrollTop <=
        element.clientHeight + offset
      );
    },
    [],
  );

  const onScroll = useCallback(
    (e: UIEvent<HTMLElement>) => {
      setIsBottom(isScrollNearBottom(e.currentTarget));
    },
    [isScrollNearBottom, setIsBottom],
  );

  const scrollRef = useCallback(
    (elem: HTMLDivElement | null) => {
      if (elem) {
        setScrollFn((offset: number) => {
          elem.scrollTo({
            top: offset,
            behavior: 'smooth',
          });
        });
        setScrollToBottomFn(() => {
          elem.scrollTo({
            top: elem.scrollHeight - elem.clientHeight,
            behavior: 'smooth',
          });
        });
      }
    },
    [setScrollFn, setScrollToBottomFn],
  );
  return { scrollRef, onScroll };
}
