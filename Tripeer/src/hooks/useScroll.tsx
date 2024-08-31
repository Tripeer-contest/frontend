import { useCallback } from 'react';
import zustandStore from '../store/store';

export default function useScroll() {
  const setScrollFn = zustandStore((state) => state.setScrollFn);
  const setScrollRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (node) {
        setScrollFn((offset: number) => {
          node.scrollTo({
            top: offset,
            behavior: 'smooth',
          });
        });
      }
    },
    [setScrollFn],
  );
  return { setScrollRef };
}
