import { useInfiniteQuery } from '@tanstack/react-query';
import getPlanSpotSearch from '../api/getPlanSpotSearch';

export default function useGetPlanSpotSearchQuery(
  planId: number,
  cityId: number,
  townId: number,
  keyword: string,
  sortType: number,
) {
  const { data, isLoading } = useInfiniteQuery({
    queryKey: ['getPlanSpotSearch', cityId, townId, planId, keyword, sortType],
    queryFn: ({ pageParam = 1 }) =>
      getPlanSpotSearch(planId, cityId, townId, keyword, sortType, pageParam),
    getNextPageParam: (lastPage, page) => {
      return lastPage.last === false ? page.length + 1 : undefined;
    },
    initialPageParam: 1,
  });
  return { data, isLoading };
}
