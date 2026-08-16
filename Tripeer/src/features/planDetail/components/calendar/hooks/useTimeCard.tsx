import zustandStore from '../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';
import React, { useEffect, useState } from 'react';
import usePlanDetailModal from '../../../hooks/usePlanDetailModal.tsx';
import { Array as yArray } from 'yjs';
import { timeYListInfo } from '../../../../../store/room/RoomSliceState.ts';

const useTimeCard = (arrIdx: number, idx: number) => {
  const [timeYList, doc] = zustandStore(
    useShallow((state) => [state.room_timeYList, state.y_doc]),
  );

  const { open, close, PlanModal } = usePlanDetailModal();

  const [isFading, setIsFading] = useState(false);
  const [displayValue, setDisplayValue] = useState<string | undefined>(
    timeYList[arrIdx]?.[idx]?.time[timeYList[arrIdx]?.[idx]?.option],
  );

  useEffect(() => {
    // 값이 변경되었을 때만 애니메이션을 적용
    const currentValue =
      timeYList[arrIdx]?.[idx]?.time[timeYList[arrIdx]?.[idx]?.option];
    if (currentValue !== displayValue) {
      setIsFading(true);
      setDisplayValue(currentValue);

      const timeoutId = setTimeout(() => {
        setIsFading(false);
      }, 1500);

      return () => clearTimeout(timeoutId);
    }
  }, [displayValue, arrIdx, idx, timeYList]);

  const newOnclickHandler = () => {
    open();
  };

  const onClickBackground = (close: () => void) => {
    close();
  };

  const onChangeOption = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
    close: () => void,
  ) => {
    e.stopPropagation();
    if (doc) {
      const timeY = doc.getArray('timeYList');
      const arr = timeY.get(arrIdx) as yArray<timeYListInfo>;
      const data = arr.toArray()[idx];
      const newData = { ...data, option: index };
      arr.delete(idx, 1);
      arr.insert(idx, [newData]);
      close();
    }
  };

  return {
    newOnclickHandler,
    isFading,
    open,
    close,
    PlanModal,
    onClickBackground,
    onChangeOption,
  };
};

export default useTimeCard;
