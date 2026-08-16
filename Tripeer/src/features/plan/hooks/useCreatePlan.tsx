import { useMutation, useQueryClient } from '@tanstack/react-query';
import postPlan from '../api/postPlan';
import { PlanTypes } from '../types/PlanTypes';

export default function useCreatePlan(data: PlanTypes) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      return await postPlan(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['plan'] });
    },
  });

  return mutation;
}
