import { useCallback, useRef } from 'react';

export default function useIntersectionScroll(fetchToNext: () => void) {
  const ioRef = useRef<IntersectionObserver | null>(null);

  const setRef = useCallback(
    (elem: HTMLElement | null) => {
      if (ioRef.current === null)
        ioRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              entry.isIntersecting && fetchToNext();
            });
          },
          { threshold: 0.5 },
        );
      if (elem) {
        ioRef.current.observe(elem);
      }
    },
    [fetchToNext],
  );

  return { setRef };
}
