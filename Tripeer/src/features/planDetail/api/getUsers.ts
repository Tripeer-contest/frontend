import api from '../../../utils/api';

export default async function getUsers(keyword: string) {
  try {
    const res = await api.get(`user/search/${keyword}`);
    return res.data;
  } catch {
    throw new Error('에러 발생');
  }
}
