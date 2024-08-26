import { useMutation, useQueryClient } from '@tanstack/react-query';
import deleteDiary from '../api/deleteDiary';

export default function useDeleteDiary() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (planId: number) => await deleteDiary(planId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['diaryList'] });
    },
  });
  return mutation;
}
