import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import getDiary from '../api/getDiary';
import { DiaryAPI, DiaryTypes } from '../../diary/types/DiaryTypes';

function useGetDiaryQuery<T>(
  planId: string | undefined,
  callback: (data: DiaryTypes) => T,
) {
  return useSuspenseQuery<DiaryTypes, Error, T>({
    queryKey: ['diary', planId],
    queryFn: () => getDiary(planId),
    select: callback,
  });
}

export default function useGetSummaryQuery(planId: string | undefined) {
  const { data } = useGetDiaryQuery<DiaryTypes['diaryDetail']>(
    planId,
    (data) => data.diaryDetail,
  );

  return data;
}

export function useGetDayListQuery(planId: string | undefined) {
  const { data } = useGetDiaryQuery<DiaryTypes['diaryDayList']>(
    planId,
    (data) => data.diaryDayList,
  );

  return data;
}

export function useGetDiary() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<DiaryAPI>(['diary']);
  return data && data.data ? data.data : [];
}
