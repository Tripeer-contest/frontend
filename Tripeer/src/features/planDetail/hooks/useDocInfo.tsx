import { useEffect, useState } from 'react';
import zustandStore from '../../../store/store';
import { useParams } from 'react-router-dom';
import { useShallow } from 'zustand/react/shallow';

export default function useDocInfo(isYConnected: boolean) {
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const [ws, y_doc, setTownList, setStartDay, setEndDay, setTitle, syncUser] =
    zustandStore(
      useShallow((state) => [
        state.y_ws,
        state.y_doc,
        state.room_setTownList,
        state.room_setStartDay,
        state.room_setEndDay,
        state.room_setTitle,
        state.room_syncUser,
      ]),
    );

  useEffect(() => {
    const setStateField = () => {
      const townList = ws?.doc.getArray('townList').toJSON();
      const title = ws?.doc.getText('title').toJSON();
      const startDay = ws?.doc.getText('startDay').toJSON();
      const endDay = ws?.doc.getText('endDay').toJSON();
      const YUser = ws?.doc.getArray('userInfo');
      YUser?.observe(() => {
        const user = YUser.toJSON();
        const newUser = user.map((u) => ({ ...u, isOnline: false }));
        syncUser(newUser);
      });
      if (townList && townList.length > 0)
        setTownList([
          {
            title: '전체',
            cityId: -1,
            townId: -1,
            latitude: townList[0].latitude,
            longitude: townList[0].longitude,
          },
          ...townList,
        ]);
      if (title) setTitle(title);
      if (startDay) setStartDay(startDay);
      if (endDay) setEndDay(endDay);
      setIsLoading(false);
    };

    if (isYConnected) {
      setStateField();
    }
  }, [
    ws,
    params,
    y_doc,
    setTitle,
    setStartDay,
    setEndDay,
    setTownList,
    syncUser,
    isYConnected,
  ]);

  return { isLoading };
}
