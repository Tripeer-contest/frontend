import api from '../../../utils/api';

export default async function postWishItem(id: number, like: boolean) {
  try {
    return await api.post('user/wishlist', { spotInfoId: id, like: like });
  } catch {
    new Error('에러발생');
  }
}
