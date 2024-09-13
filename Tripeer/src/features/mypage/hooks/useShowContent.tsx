import { useCallback, useRef, useState } from 'react';

export default function useShowContent() {
  const [heightState, setHeightState] = useState<{ [param: number]: number }>(
    {},
  );
  const heightRef = useRef<{ [param: number]: number }>({});
  const showContent = (noticeId: number) => {
    const newHeight = { ...heightState };
    if (newHeight[noticeId]) newHeight[noticeId] = 0;
    else newHeight[noticeId] = +heightRef.current[noticeId];
    console.log(newHeight[noticeId]);
    setHeightState(newHeight);
  };

  const setHeightRef = useCallback((elem: HTMLElement | null, id: number) => {
    if (elem) {
      heightRef.current[id] = elem.offsetHeight;
      console.log(heightRef.current[id]);
    }
  }, []);

  return {
    heightState,
    showContent,
    setHeightRef,
  };
}
