import { useSuspenseQuery } from '@tanstack/react-query';
import getPlan from '../api/getPlan';

export default function usePlan() {
  const { data } = useSuspenseQuery({
    queryKey: ['plan', 'get'],
    queryFn: getPlan,
    staleTime: 1000 * 60 * 5,
  });

  return data;
}
