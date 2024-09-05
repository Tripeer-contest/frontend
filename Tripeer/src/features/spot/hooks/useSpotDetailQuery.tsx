import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { getReviewPerPage, getSpotDetail } from '../api/getSpotDetail';
import {
  ReviewListInterface,
  SpotDetailInterface,
} from '../../../types/PlaceType';

export default function useSpotDetailQuery<T>(
  spotId: number,
  selectFn: (data: SpotDetailInterface) => T,
) {
  return useSuspenseQuery<SpotDetailInterface, Error, T>({
    queryKey: ['spot', 'detail', spotId],
    queryFn: () => getSpotDetail(spotId),
    select: selectFn,
  });
}

export function useReviewDetailQuery(spotId: number, page: number) {
  const { data, isError, isLoading } = useQuery<ReviewListInterface>({
    queryKey: ['spot', 'review', spotId, page],
    queryFn: () => getReviewPerPage(spotId, page),
    enabled: !!page,
  });
  return { data, isError, isLoading };
}
