import { useInfiniteQuery } from '@tanstack/react-query';
import getSearch from '../api/getSearch.ts';

const useGetSearchData = (keyword: string) => {
  const { data, isLoading, ...rest } = useInfiniteQuery({
    queryKey: ['getPlaceList', keyword],
    queryFn: ({ pageParam = 1 }) => getSearch(pageParam, keyword),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.last === false ? pages.length + 1 : undefined;
    },
    staleTime: 5 * 60 * 1000,
    initialPageParam: 1,
    enabled: !!keyword,
  });

  return { data, isLoading, ...rest };
};

export default useGetSearchData;
