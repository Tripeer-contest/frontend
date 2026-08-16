import api from '../../../utils/api';

export default async function getWishItem() {
  try {
    const res = await api.get(`/user/mypage/wishlist`);
    return res.data;
  } catch {
    throw new Error('에러발생');
  }
}
