import { useQuery } from '@tanstack/react-query';
import { RecommendInterfaceAPI } from '../../../types/PlanDetailTypes';
import getPlanRecommend from '../api/getPlanRecommend';

export default function useGetRecommendQuery(
  planId: number,
  cityId: number,
  townId: number,
) {
  const { data, isLoading } = useQuery<RecommendInterfaceAPI>({
    queryKey: ['plan', 'recommend', planId, cityId, townId],
    queryFn: () => getPlanRecommend(planId, cityId, townId),
  });
  return { data, isLoading };
}
