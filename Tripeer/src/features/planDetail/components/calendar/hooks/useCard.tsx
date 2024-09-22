import {
  timeYListInfo,
  totalYListInfo,
} from '../../../../../store/room/RoomSliceState.ts';
import usePlanDetailModal from '../../../hooks/usePlanDetailModal.tsx';
import zustandStore from '../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';
import { Array as YArray } from 'yjs';
import postAtoB from '../../../api/postAtoB.ts';

const useCard = (item: totalYListInfo, idx: number) => {
  const [nowDay, doc] = zustandStore(
    useShallow((state) => [state.c_nowDay, state.y_doc]),
  );
  const { open, close, PlanModal } = usePlanDetailModal();
  const onClickHandler = () => {
    open();
  };

  const onClickBackground = (close: () => void) => {
    close();
  };

  const addPlace = async (close: () => void) => {
    if (doc) {
      const totalY = doc.getArray('totalYList');
      const yArr = totalY.get(nowDay + 1) as YArray<totalYListInfo>;
      yArr.insert(yArr.length, [item]);
      const yZero = totalY.get(0) as YArray<totalYListInfo>;
      yZero.delete(idx, 1);

      if (yArr.length >= 2) {
        const timeY = doc.getArray('timeYList');
        const yTArr = timeY.get(nowDay + 1) as YArray<timeYListInfo>;
        const start = yArr.get(yArr.length - 2);
        const data = await postAtoB(start, item);
        yTArr.insert(yTArr.length, [data]);
      }
    }
    close();
  };

  return {
    onClickHandler,
    open,
    close,
    PlanModal,
    onClickBackground,
    addPlace,
  };
};

export default useCard;
