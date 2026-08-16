import { useQueryClient } from '@tanstack/react-query';
import { wishListAPI } from '../types/wishListItem';

export default function useGetExistWish() {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<wishListAPI>(['wishList']);
  return data && data.data.length > 0 ? data.data : [];
}
