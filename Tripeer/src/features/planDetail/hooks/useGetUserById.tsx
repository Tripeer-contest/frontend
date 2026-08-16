import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store';
import { useCallback } from 'react';
import { OnlineInfo } from '../../../store/room/RoomSliceState';

export default function useGetUserById() {
  const [users] = zustandStore(useShallow((state) => [state.room_userInfo]));
  const getUser = useCallback(
    (userId: number) => {
      const idx = users.findIndex((user) => user.userId === userId);
      return idx !== -1 ? users[idx] : ({} as OnlineInfo);
    },
    [users],
  );

  return getUser;
}
