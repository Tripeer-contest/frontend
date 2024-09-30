import api from '../../../utils/api';

export default async function getWeather(cityId: number) {
  try {
    const res = await api.get(`/weather?cityId=${cityId}&townId=-1`);
    return res.data.data;
  } catch {
    throw new Error('에러발생');
  }
}
