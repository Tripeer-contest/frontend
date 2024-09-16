import api from '../../../utils/api';

export default async function getPlanRecommend(
  planId: number,
  cityId: number,
  townId: number,
) {
  try {
    const response = await api.get(
      `/place/recommend/plan?planId=${planId}&cityId=${cityId}&townId=${townId}`,
    );
    return response.data.data;
  } catch {
    throw new Error('에러 발생');
  }
}
