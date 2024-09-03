import api from '../../../utils/api';

export async function inviteUser(userId: number, planId: number) {
  try {
    const res = await api.post(`/plan/member`, { userId, planId });
    return res.data;
  } catch (err: any) {
    throw new Error(err?.response?.data?.message);
  }
}
