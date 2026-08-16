import api from '../../../utils/api';

export default async function getPlanSpotSearch(
  planId: number,
  cityId: number,
  townId: number,
  keyword: string,
  sortType: number,
  page: number,
) {
  try {
    const response = await api.get(
      `/plan/spot?cityId=${cityId}&keyword=${keyword}&page=${page}&sortType=${sortType}&townId=${townId}&planId=${planId}`,
    );
    return response.data.data;
  } catch {
    throw new Error('에러 발생');
  }
}
