import { useEffect, useState } from 'react';
import zustandStore from '../../../store/store';
import { useParams } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';

export default function useDocInfo() {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const [
    ws,
    isConnected,
    y_doc,
    setTownList,
    setStartDay,
    setEndDay,
    setTitle,
  ] = zustandStore(
    useShallow((state) => [
      state.y_ws,
      state.y_connected,
      state.y_doc,
      state.room_setTownList,
      state.room_setStartDay,
      state.room_setEndDay,
      state.room_setTitle,
    ]),
  );

  useEffect(() => {
    const setStateField = () => {
      const townList = ws?.doc.getArray('townList').toJSON();
      const title = ws?.doc.getText('title').toJSON();
      const startDay = ws?.doc.getText('startDay').toJSON();
      const endDay = ws?.doc.getText('endDay').toJSON();
      if (townList) setTownList(townList);
      if (title) setTitle(title);
      if (startDay) setStartDay(startDay);
      if (endDay) setEndDay(endDay);
      setIsLoading(false);
    };

    if (isConnected) {
      setStateField();
    }
  }, [
    ws,
    params,
    isConnected,
    y_doc,
    setTitle,
    setStartDay,
    setEndDay,
    setTownList,
  ]);

  return { isLoading };
}
