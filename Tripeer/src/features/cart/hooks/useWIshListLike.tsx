import { useMutation, useQueryClient } from '@tanstack/react-query';
import { wishListAPI } from '../types/wishListItem';
import postWishItem from '../api/postWishItem';

export default function useWishListLike() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async ({ id, like }: { id: number; like: boolean }) =>
      await postWishItem(id, like),
    onMutate: async ({ id, like }) => {
      await queryClient.cancelQueries({ queryKey: ['wishList'] });
      const previous = queryClient.getQueryData(['wishList']);
      queryClient.setQueryData(['wishList'], (old: wishListAPI) => {
        const newWishList = {
          data: old.data.map((item) =>
            item.spotInfoId === id ? { ...item, like: !like } : item,
          ),
        };
        return newWishList;
      });

      return { previous };
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(['wishList'], context?.previous);
    },
  });
  return mutation;
}
