import api from '../../../utils/api';

export default async function getMyInfo() {
  try {
    const res = await api.get('/user/myinfo');
    return res.data.data;
  } catch {
    throw new Error('에러발생');
  }
}

export async function getIsDuplicate(nickname: string) {
  try {
    const res = await api.get(`/user/name/duplicatecheck/${nickname}`);
    return res.data.data;
  } catch {
    throw new Error('에러발생');
  }
}
