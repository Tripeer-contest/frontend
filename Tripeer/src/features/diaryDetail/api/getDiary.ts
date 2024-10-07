import api from '../../../utils/api';

export default async function getDiary(planId: string | undefined) {
  try {
    const response = await api.get(`history/${planId}`);
    return response.data.data;
  } catch {
    throw new Error('에러발생');
  }
}
