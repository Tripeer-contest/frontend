import api from '../../../utils/api';

export default async function deleteDiary(planId: number) {
  try {
    const response = await api.delete(`history/${planId}`);
    return response;
  } catch {
    throw new Error('에러 발생');
  }
}
