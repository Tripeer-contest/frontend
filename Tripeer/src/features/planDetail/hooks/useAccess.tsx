import { useQuery } from '@tanstack/react-query';
import getRoomInfo from '../api/getRoomInfo';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { RoomInterfaceAPI } from '../../../types/PlanDetailTypes';
import zustandStore from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';

export default function useAccess(roomId: string | undefined) {
  const [init] = zustandStore(useShallow((state) => [state.room_init]));
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
    return () => {
      if (isSuccess && data) {
        init();
      }
    };
  }, [isSuccess, data, init]);

  return { data, isLoading, isError, refetch, isSuccess };
}
