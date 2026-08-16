import api from '../../../utils/api';

export default async function getRecommendKeywords(
  keyword: string,
  cityId: number,
  townId: number,
) {
  try {
    const res = await api.get(
      `/place/recommend/keyword?cityId=${cityId}&townId=${townId}&keyword=${keyword}`,
    );
    return res.data.data;
  } catch {
    throw new Error('에러 발생');
  }
}
