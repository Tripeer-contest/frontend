import { useCallback, useEffect, useRef } from 'react';

export default function useIntersectionScroll(fetchToNext: () => void) {
  const ioRef = useRef<IntersectionObserver | null>(null);

  const setRef = useCallback(
    (elem: HTMLElement | null) => {
      if (ioRef.current === null)
        ioRef.current = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                fetchToNext();
                ioRef.current?.unobserve(entry.target);
              }
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

  useEffect(() => {
    return () => {
      ioRef.current?.disconnect();
      ioRef.current = null;
    };
  }, []);

  return { setRef };
}
