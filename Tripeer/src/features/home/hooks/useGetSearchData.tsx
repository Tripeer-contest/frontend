import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import getSearch from '../api/getSearch.ts';

const useGetSearchData = (keyword: string) => {
  const client = useQueryClient();
  const isCached = client.getQueryData(['getPlaceList', keyword]);

  const { data, isLoading, ...rest } = useInfiniteQuery({
    queryKey: ['getPlaceList', keyword],
    queryFn: ({ pageParam = 1 }) => getSearch(pageParam, keyword),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.last === false ? pages.length : undefined;
    },
    staleTime: 5 * 60 * 1000,
    initialPageParam: 1,
    enabled: !isCached,
  });

  return { data, isLoading, ...rest };
};

export default useGetSearchData;
