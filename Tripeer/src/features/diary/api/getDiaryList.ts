import api from '../../../utils/api';

export default async function getDiaryList() {
  try {
    const response = await api.get('/history');
    return response.data;
  } catch {
    throw new Error('에러발생');
  }
}
