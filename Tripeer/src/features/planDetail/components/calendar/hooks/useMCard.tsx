import useIsMobileSize from '../../../hooks/useIsMobileSize.tsx';
import usePlanDetailModal from '../../../hooks/usePlanDetailModal.tsx';
import zustandStore from '../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';
import { Array as YArray } from 'yjs';
import {
  timeYListInfo,
  totalYListInfo,
} from '../../../../../store/room/RoomSliceState.ts';
import postAtoB from '../../../api/postAtoB.ts';

const useMCard = (item: totalYListInfo, itemIdx: number) => {
  const isMobile = useIsMobileSize();
  const { open, close, PlanModal } = usePlanDetailModal();
  const [nowDay, doc] = zustandStore(
    useShallow((state) => [state.c_nowDay, state.y_doc]),
  );

  const onClickHandler = () => {
    if (isMobile) open();
  };

  const backHandler = (close: () => void) => {
    close();
  };

  const addHandler = async (close: () => void, toIdx: number) => {
    if (doc) {
      const totalY = doc.getArray('totalYList');
      const syArr = totalY.get(nowDay + 1) as YArray<totalYListInfo>;
      const dyArr = totalY.get(toIdx) as YArray<totalYListInfo>;
      const timeY = doc.getArray('timeYList');
      const syTArr = timeY.get(nowDay + 1) as YArray<timeYListInfo>;
      const dyTArr = timeY.get(toIdx) as YArray<timeYListInfo>;

      // 맨앞을 이동할떄
      if (itemIdx === 0) {
        if (syArr.length >= 2) syTArr.delete(0, 1);
        syArr.delete(0, 1);
        close();
        dyArr.insert(dyArr.length, [item]);
        if (dyArr.length >= 2) {
          const start = dyArr.get(dyArr.length - 2);
          const data = await postAtoB(start, item);
          dyTArr.insert(dyTArr.length, [data]);
        }
      }
      // 끝을 이동할때
      else if (itemIdx === syArr.length - 1) {
        if (syArr.length >= 2) {
          syTArr.delete(syTArr.length - 1, 1);
        }
        syArr.delete(syArr.length - 1, 1);
        close();
        dyArr.insert(dyArr.length, [item]);
        if (dyArr.length >= 2) {
          const start = dyArr.get(dyArr.length - 2);
          const data = await postAtoB(start, item);
          dyTArr.insert(dyTArr.length, [data]);
        }
      }

      // 중간을 이동할때
      else {
        syTArr.delete(itemIdx, 1);
        syTArr.delete(itemIdx - 1, 1);
        const start = syArr.get(itemIdx - 1);
        const end = syArr.get(itemIdx + 1);
        const data = await postAtoB(start, end);
        syTArr.insert(itemIdx - 1, [data]);
        syArr.delete(itemIdx, 1);
        close();
        dyArr.insert(dyArr.length, [item]);
        if (dyArr.length >= 2) {
          const start = dyArr.get(dyArr.length - 2);
          const data = await postAtoB(start, item);
          dyTArr.insert(dyTArr.length, [data]);
        }
      }
    }
  };

  const deleteHandler = async (close: () => void) => {
    if (doc) {
      const totalY = doc.getArray('totalYList');
      const syArr = totalY.get(nowDay + 1) as YArray<totalYListInfo>;
      const timeY = doc.getArray('timeYList');
      const syTArr = timeY.get(nowDay + 1) as YArray<timeYListInfo>;
      const tZero = totalY.get(0) as YArray<totalYListInfo>;

      // 맨앞
      if (itemIdx === 0) {
        if (syArr.length >= 2) syTArr.delete(0, 1);
        syArr.delete(0, 1);
      }
      // 끝
      else if (itemIdx === syArr.length - 1) {
        if (syArr.length >= 2) {
          syTArr.delete(syTArr.length - 1, 1);
        }
        syArr.delete(syArr.length - 1, 1);
      }

      // 중간
      else {
        syTArr.delete(itemIdx, 1);
        syTArr.delete(itemIdx - 1, 1);
        const start = syArr.get(itemIdx - 1);
        const end = syArr.get(itemIdx + 1);
        const data = await postAtoB(start, end);
        syTArr.insert(itemIdx - 1, [data]);
        syArr.delete(itemIdx, 1);
      }
      tZero.insert(tZero.length, [item]);
    }
    close();
  };

  return {
    onClickHandler,
    isMobile,
    open,
    close,
    PlanModal,
    backHandler,
    addHandler,
    deleteHandler,
  };
};

export default useMCard;
