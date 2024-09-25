import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import api from '../utils/api';

async function getAlarm(page: number) {
  try {
    let url = `/noti?lastid=${page}&size=10`;
    if (page === -1) url = `/noti?size=10`;
    const res = await api.get(url);
    return res.data.data;
  } catch {
    throw new Error('에러발생');
  }
}

async function confirmInvite(planId: number) {
  try {
    const res = await api.get(`plan/member/join/${planId}`);
    return res.data.data;
  } catch (err: any) {
    throw new Error(err.response.data.message);
  }
}

async function removeAlarm(alarmId: number) {
  try {
    const res = await api.patch(`noti/${alarmId}`);
    return res.data.data;
  } catch {
    throw new Error('에러발생');
  }
}

export function useRemoveAlarmMutation() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: ({ alarmId }: { alarmId: number }) => removeAlarm(alarmId),
    onMutate: async ({ alarmId }) => {
      await queryClient.cancelQueries({ queryKey: ['getAlarm'] });
      const prev = queryClient.getQueryData(['getAlarm']);
      queryClient.setQueryData(['getAlarm'], (old: any) => {
        const newAlarm = old.pages.map((page: any) => {
          const list = page.list.filter((item: any) => item.id !== alarmId);
          return { ...page, list: list };
        });
        return { ...old, pages: newAlarm };
      });
      return { prev };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(['plan'], context?.prev);
    },
  });
  return { mutate };
}

export function useAlarmQuery() {
  const { data, fetchNextPage, isLoading, isError, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['getAlarm'],
      queryFn: ({ pageParam = -1 }) => getAlarm(pageParam),
      getNextPageParam: (last) => {
        return last.hasNext === true
          ? last.list[last.list.length - 1].id
          : undefined;
      },
      refetchInterval: 1000 * 30,
      initialPageParam: -1,
    });
  return { data, fetchNextPage, isLoading, isError, hasNextPage };
}

export function useInviteMutation() {
  const removeMutation = useRemoveAlarmMutation();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: ({ planId }: { planId: number; alarmId: number }) =>
      confirmInvite(planId),
    onSuccess: (_, { alarmId }) => {
      removeMutation.mutate({ alarmId: alarmId });
    },
  });

  return { mutate, isError, isPending, error };
}
