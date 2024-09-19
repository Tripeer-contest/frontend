import zustandStore from '../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';
import postAtoB from '../../../api/postAtoB.ts';
import { timeYListInfo } from '../../../../../store/room/RoomSliceState.ts';
import { Array as YArray } from 'yjs';
import { useEffect, useState } from 'react';

const useTimeCard = (arrIdx: number, idx: number) => {
  const [totalYList, timeYList, ws] = zustandStore(
    useShallow((state) => [
      state.room_totalYList,
      state.room_timeYList,
      state.y_ws,
    ]),
  );

  const loadingData: [string, string, timeYListInfo | null] = [
    '계산중',
    '0',
    null,
  ];

  const onClickHandler = async () => {
    const arr = totalYList[arrIdx];
    const timeArr = timeYList[arrIdx][idx];
    const start = arr[idx];
    const end = arr[idx + 1];
    let option = timeArr[1];
    const content = timeArr[0];

    if (ws) {
      const timeY = ws.doc.getArray('timeYList');
      const changeArr = timeY.get(arrIdx) as YArray<
        [string, string, timeYListInfo | null]
      >;

      if (content === '계산중') option = timeArr[1];
      else if (option === '0') option = '1';
      else option = '0';

      changeArr.delete(idx, 1);
      changeArr.insert(idx, [loadingData]);

      const res = await postAtoB(start, end, option);

      if (res) {
        const newYArr: [string, string, timeYListInfo | null] = [
          res.spotTime[0],
          res.spotTime[1],
          res.publicRootList,
        ];

        changeArr.delete(idx, 1);
        changeArr.insert(idx, [newYArr]);
      }
    }
  };

  const [isFading, setIsFading] = useState(false);
  const [displayValue, setDisplayValue] = useState<string | undefined>(
    timeYList[arrIdx]?.[idx]?.[0],
  );

  useEffect(() => {
    // 값이 변경되었을 때만 애니메이션을 적용
    const currentValue = timeYList[arrIdx]?.[idx]?.[0];
    if (currentValue !== displayValue) {
      setIsFading(true);
      setDisplayValue(currentValue);

      const timeoutId = setTimeout(() => {
        setIsFading(false);
      }, 1500);

      return () => clearTimeout(timeoutId);
    }
  }, [displayValue, arrIdx, idx, timeYList]);

  return { onClickHandler, isFading };
};

export default useTimeCard;
