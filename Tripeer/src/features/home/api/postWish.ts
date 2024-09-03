import api from '../../../utils/api.ts';

interface Props {
  spotId: number;
  isLike: boolean;
}

export const postWish = async ({ spotId, isLike }: Props) => {
  const response = await api.post('/user/wishlist', {
    spotInfoId: spotId,
    like: isLike,
  });

  console.log(response.data);

  return response.data;
};
