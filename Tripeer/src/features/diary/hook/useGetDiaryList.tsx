import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import getDiaryList from '../api/getDiary';
import { DiaryListAPI } from '../../../types/DiaryTypes';

export default function useGetDiaryQuery() {
  const { data } = useSuspenseQuery({
    queryKey: ['diaryList'],
    queryFn: getDiaryList,
  });

  return data;
}

export function useGetDiaryList() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<DiaryListAPI>(['diaryList']);
  return data && data.data.length > 0 ? data.data : [];
}
