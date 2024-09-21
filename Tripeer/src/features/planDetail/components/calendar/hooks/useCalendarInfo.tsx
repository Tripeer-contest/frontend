import zustandStore from '../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';
import { useEffect } from 'react';

const useCalendarInfo = (isConnected: boolean) => {
  const [ws, doc, setTotalYList, setTimeYList] = zustandStore(
    useShallow((state) => [
      state.y_ws,
      state.y_doc,
      state.room_setTotalYList,
      state.room_setTimeYList,
    ]),
  );

  useEffect(() => {
    const setStateField = () => {
      const totalYList = ws?.doc.getArray('totalYList').toJSON();
      if (totalYList) setTotalYList(totalYList);
      const timeYList = ws?.doc.getArray('timeYList').toJSON();
      if (timeYList) setTimeYList(timeYList);
    };

    if (isConnected) setStateField();
  }, [isConnected, ws, doc, setTotalYList, setTimeYList]);
};

export default useCalendarInfo;
