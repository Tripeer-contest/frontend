import { useSuspenseQuery } from '@tanstack/react-query';
import getWishItem from '../api/getWishItem';
import { wishListAPI } from '../types/wishListItem';

export default function useWishItem() {
  const { data } = useSuspenseQuery<wishListAPI>({
    queryFn: getWishItem,
    queryKey: ['wishList'],
    staleTime: 1000 * 60 * 5,
  });
  return data;
}
