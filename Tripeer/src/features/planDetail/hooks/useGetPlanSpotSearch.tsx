import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import getPlanSpotSearch from '../api/getPlanSpotSearch';
import postWishItem from '../../cart/api/postWishItem';

export default function useGetPlanSpotSearchQuery(
  planId: number,
  cityId: number,
  townId: number,
  keyword: string,
  sortType: number,
) {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: [
        'getPlanSpotSearch',
        cityId,
        townId,
        planId,
        keyword,
        sortType,
      ],
      queryFn: ({ pageParam = 1 }) =>
        getPlanSpotSearch(planId, cityId, townId, keyword, sortType, pageParam),
      getNextPageParam: (lastPage, page) => {
        return lastPage.lastPage === false ? page.length + 1 : undefined;
      },
      initialPageParam: 1,
    });
  return { data, isLoading, isError, hasNextPage, fetchNextPage };
}

export function usePlanSpotLikeQuery(
  planId: number,
  cityId: number,
  townId: number,
  keyword: string,
  sortType: number,
) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ id, like }: { id: number; like: boolean }) =>
      postWishItem(id, like),
    onMutate: async ({ id, like }) => {
      await queryClient.cancelQueries({
        queryKey: [
          'getPlanSpotSearch',
          cityId,
          townId,
          planId,
          keyword,
          sortType,
        ],
      });
      const prev = queryClient.getQueryData([
        'getPlanSpotSearch',
        cityId,
        townId,
        planId,
        keyword,
        sortType,
      ]);

      queryClient.setQueryData(
        ['getPlanSpotSearch', cityId, townId, planId, keyword, sortType],
        (old: any) => {
          const newPages = old.pages.map((page: any) => {
            const newPage = page.searchResultList.map((spot: any) => {
              return spot.spotInfoId === id
                ? { ...spot, wishlist: !like }
                : spot;
            });
            return { lastPage: page.lastPage, searchResultList: newPage };
          });
          return { pageParams: old.pageParams, pages: newPages };
        },
      );
      return { prev };
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(
        ['getPlanSpotSearch', cityId, townId, planId, keyword, sortType],
        context?.prev,
      );
    },
  });

  return mutation;
}
