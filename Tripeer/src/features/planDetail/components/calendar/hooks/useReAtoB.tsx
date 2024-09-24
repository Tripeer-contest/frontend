import { useEffect } from 'react';
import zustandStore from '../../../../../store/store.tsx';
import postAtoB from '../../../api/postAtoB.ts';
import { Array as YArray } from 'yjs';
import {
  timeYListInfo,
  totalYListInfo,
} from '../../../../../store/room/RoomSliceState.ts';

const useReAtoB = (time: string, idx: number, itemIdx: number) => {
  const doc = zustandStore((state) => state.y_doc);

  useEffect(() => {
    if (time === '계산중') {
      const timer = setTimeout(() => {
        if (time === '계산중') prefetchAtoB().then();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [time]);

  const prefetchAtoB = async () => {
    if (doc) {
      const yArr = doc.getArray('totalYList');
      const targetArr = yArr.get(idx) as YArray<totalYListInfo>;
      const start = targetArr.get(itemIdx);
      const end = targetArr.get(itemIdx + 1);

      const data = await postAtoB(start, end);

      const tYArr = doc.getArray('timeYList');
      const targetT = tYArr.get(idx) as YArray<timeYListInfo>;
      targetT.delete(itemIdx, 1);
      targetT.insert(itemIdx, [data]);
    }
  };

  return {};
};

export default useReAtoB;
