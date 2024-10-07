import api from '../../../utils/api.ts';

interface Props {
  spotId: number;
  like: boolean;
}

export const postWish = async ({ spotId, like }: Props) => {
  const response = await api.post('/user/wishlist', {
    spotInfoId: spotId,
    like,
  });

  return response.data;
};
