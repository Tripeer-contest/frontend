import { useSuspenseQuery } from '@tanstack/react-query';
import getRecommendKeywords from '../api/getRecommendKeyword';

export default function useGetBannerQuery(
  cityId: number,
  townId: number,
  keyword: string,
) {
  const { data } = useSuspenseQuery({
    queryKey: ['banner', cityId, townId, keyword],
    queryFn: () => getRecommendKeywords(keyword, cityId, townId),
  });

  return { data };
}
