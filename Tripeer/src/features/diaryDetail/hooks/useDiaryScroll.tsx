import { UIEvent, useCallback, useEffect } from 'react';
import zustandStore from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';

export default function useDiaryScroll(dayLength: number) {
  const [setScrollFn, setDiaryScroll, setDayScroll] = zustandStore(
    useShallow((state) => [
      state.setDiaryScrollFn,
      state.setDiaryContainerScroll,
      state.setDiaryDayScroll,
    ]),
  );
  const setScrollRef = useCallback(
    (elem: HTMLDivElement | null) => {
      if (elem)
        setScrollFn((offset: number) => {
          elem.scrollTo({
            top: offset,
            behavior: 'smooth',
          });
        });
    },
    [setScrollFn],
  );

  const onScroll = useCallback(
    (e: UIEvent<HTMLElement>) => {
      setDiaryScroll(e.currentTarget.scrollTop);
    },
    [setDiaryScroll],
  );

  useEffect(() => {
    if (dayLength) {
      const initDayScroll = Array.from({ length: dayLength }, () => -1);
      setDayScroll(initDayScroll);
    }
  }, [dayLength, setDayScroll]);

  return { setScrollRef, onScroll };
}
