import React from 'react';
import zustandStore from '../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';
import { totalYListInfo } from '../../../../../store/room/RoomSliceState.ts';
import { Array as YArray } from 'yjs';

const useDndCard = (item: totalYListInfo) => {
  const [spotList, doc, totalYList] = zustandStore(
    useShallow((state) => [
      state.room_spotList,
      state.y_doc,
      state.room_totalYList,
    ]),
  );

  const onDelete = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    if (doc) {
      const total = doc.getArray('totalYList');
      const totalZero = total.get(0) as YArray<totalYListInfo>;
      const idx = totalYList[0].findIndex(
        (data) => item.spotInfoId === data.spotInfoId,
      );
      if (idx !== -1) totalZero.delete(idx, 1);

      const spots = doc.getArray('spotList');
      const sIdx = spotList.findIndex((info) => {
        return info.spotInfoId === item.spotInfoId;
      });
      console.log(spots.length, sIdx);
      if (sIdx !== -1) spots.delete(sIdx, 1);
    }
  };

  return { onDelete };
};
export default useDndCard;
