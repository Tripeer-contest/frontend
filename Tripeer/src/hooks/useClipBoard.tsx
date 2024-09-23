import { useEffect, useRef, useState } from 'react';

export default function useClipBoard(text: string) {
  const [isClip, setIsClip] = useState(false);
  const timerId = useRef<number | undefined>();

  const saveClipBoard = () => {
    navigator.clipboard.writeText(text).then(() => {
      if (timerId.current) {
        clearTimeout(timerId.current);
        timerId.current = undefined;
      }
      setIsClip(true);
      timerId.current = window.setTimeout(() => {
        setIsClip(false);
        clearTimeout(timerId.current);
        timerId.current = undefined;
      }, 2500);
    });
  };

  useEffect(() => {
    return () => {
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, []);

  return { saveClipBoard, isClip };
}
