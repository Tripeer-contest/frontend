import { useMutation, useQueryClient } from '@tanstack/react-query';
import deletePlan from '../api/deletePlan';

export default function useDeletePlan() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (idx: number) => {
      return await deletePlan(idx);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['plan'] });
    },
  });
  return mutation;
}
