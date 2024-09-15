import api from '../../../utils/api';

export default async function getPlanSpotNowSearch(
  planId: number,
  keyword: string,
  minLat: number,
  maxLat: number,
  minLon: number,
  maxLon: number,
  sortType: number,
  page: number,
) {
  try {
    const res = await api.get(
      `/plan/spot/map?planId=${planId}&keyword=${keyword}&page=${page}&minLat=${minLat}&maxLat=${maxLat}&minLon=${minLon}&maxLon=${maxLon}&sortType=${sortType}`,
    );
    return res.data.data;
  } catch {
    throw new Error('에러 발생');
  }
}
