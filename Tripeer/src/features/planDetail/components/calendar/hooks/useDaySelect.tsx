import {
  addDays,
  makeDayToDotFullString,
} from '../../../../../utils/utilDate.ts';
import zustandStore from '../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';

const useDaySelect = () => {
  const [startDay, totalYList, idx, setIdx] = zustandStore(
    useShallow((state) => [
      state.room_startDay,
      state.room_totalYList,
      state.c_nowDay,
      state.c_nowSetDay,
    ]),
  );

  const now = addDays(startDay, idx);
  const dayContent = makeDayToDotFullString(now);
  const endIdx = totalYList.length - 1;

  const leftHandler = () => {
    if (idx === 0) setIdx(endIdx - 1);
    else setIdx(idx - 1);
  };

  const rightHandler = () => {
    if (idx === endIdx - 1) setIdx(0);
    else setIdx(idx + 1);
  };

  return { dayContent, idx, leftHandler, rightHandler };
};

export default useDaySelect;
