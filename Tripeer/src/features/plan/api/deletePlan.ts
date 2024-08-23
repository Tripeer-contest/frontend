import api from '../../../utils/api';

export default async function deletePlan(idx: number) {
  try {
    const response = await api.delete(`/plan/${idx}`);
    return response.data;
  } catch {
    throw new Error('에러발생');
  }
}
