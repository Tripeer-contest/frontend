import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import getDiaryList from '../api/getDiaryList';

import { DiaryListAPI } from '../../../types/DiaryTypes';

export default function useGetDiaryListQuery() {
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
