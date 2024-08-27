import { useQuery } from '@tanstack/react-query';
import getRoomInfo from '../api/getRoomInfo';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { RoomInterfaceAPI } from '../../../types/PlanDetailTypes';
import zustandStore from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';
import { UserType } from '../../../types/UserTypes';

export default function useRoomInfo(roomId: string | undefined) {
  const [setOnline, setId, setTitle, setTownInfo, init] = zustandStore(
    useShallow((state) => [
      state.room_setCoworkerList,
      state.room_setId,
      state.room_setTitle,
      state.room_setTownList,
      state.room_init,
    ]),
  );
  const navigate = useNavigate();
  const { data, isLoading, isError, refetch, isSuccess } =
    useQuery<RoomInterfaceAPI>({
      queryKey: ['roomInfo', roomId],
      queryFn: async () => await getRoomInfo(`${roomId}`),
      enabled: false,
    });

  useEffect(() => {
    if (roomId) refetch();
  }, [roomId, refetch]);

  useEffect(() => {
    if (isError) navigate('/error');
  }, [isError, navigate]);

  useEffect(() => {
    if (isSuccess && data) {
      setId(data.data.planId);
      setTitle(data.data.title);
      setTownInfo(data.data.townList);
      setOnline(makeCoworkerToOnline(data.data.coworkerList));
    }
    return () => {
      if (isSuccess && data) {
        init();
      }
    };
  }, [isSuccess, data, setOnline, setId, setTitle, setTownInfo, init]);

  return { data, isLoading, isError, refetch };
}

const makeCoworkerToOnline = (coworkers: UserType[]) => {
  const onlineInfo = coworkers.map((coworker) => ({
    ...coworker,
    isOnline: false,
  }));
  return onlineInfo;
};
