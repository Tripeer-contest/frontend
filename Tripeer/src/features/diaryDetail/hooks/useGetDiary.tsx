import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import getDiary from '../api/getDiary';
import { DiaryAPI } from '../../diary/types/DiaryTypes';

export default function useGetSummaryQuery(planId: string | undefined) {
  const { data } = useSuspenseQuery({
    queryKey: ['diary', planId],
    queryFn: () => getDiary(planId),
    select: (data) => {
      return data.diaryDetail;
    },
  });
  return data;
}

export function useGetDayListQuery(planId: string | undefined) {
  const { data } = useSuspenseQuery({
    queryKey: ['diary', planId],
    queryFn: () => getDiary(planId),
    select: (data) => {
      return data.diaryDayList;
    },
  });
  return data;
}

export function useGetDiary() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<DiaryAPI>(['diary']);
  return data && data.data ? data.data : [];
}
