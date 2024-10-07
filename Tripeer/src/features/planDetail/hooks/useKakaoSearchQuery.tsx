import { useInfiniteQuery } from '@tanstack/react-query';
import getKakaoSearch from '../api/getKakaoSearch';

export default function useKakaoSearchQuery(keyword: string) {
  const { data, isError, isLoading, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['plan', 'detail', 'kakao', keyword],
      queryFn: ({ pageParam = 1 }) => getKakaoSearch(keyword, pageParam),
      getNextPageParam: (last, page) => {
        return !last.meta.is_end ? page.length + 1 : undefined;
      },
      initialPageParam: 1,
      enabled: !!keyword,
    });
  return { data, isError, isLoading, hasNextPage, fetchNextPage };
}
