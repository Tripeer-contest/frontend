import api from '../../../utils/api';

export default async function deleteAccount() {
  try {
    const res = await api.delete('/user');
    return res.data;
  } catch {
    throw new Error('에러 발생');
  }
}
