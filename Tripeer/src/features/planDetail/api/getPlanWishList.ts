import api from '../../../utils/api';

export default async function getPlanWish(planId: number) {
  try {
    const res = await api.get(`/plan/wishlist/${planId}`);
    return res.data.data;
  } catch {
    throw new Error('에러 발생');
  }
}
