import api from '../../../utils/api';

export default async function getPlan() {
  try {
    const response = await api.get('/plan');
    return response.data;
  } catch {
    throw new Error('에러발생');
  }
}
