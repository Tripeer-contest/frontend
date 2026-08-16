import api from '../../../utils/api';

export default async function postMessage(param: boolean) {
  try {
    const res = await api.post('user/noti', {
      allowNotifications: param,
    });
    return res.data;
  } catch {
    throw new Error('에러발생');
  }
}
