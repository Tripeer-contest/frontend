import api from '../../../utils/api';

export default async function getRoomInfo(planId: string) {
  try {
    const res = await api.get(`/plan/main/${planId}`);
    return res.data;
  } catch {
    throw new Error('에러발생');
  }
}
