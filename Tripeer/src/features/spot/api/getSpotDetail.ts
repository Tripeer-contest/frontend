import api from '../../../utils/api';

export async function getSpotDetail(spotId: number) {
  try {
    const res = await api.get(`/place/main/${spotId}`);
    return res.data;
  } catch {
    throw new Error('에러발생');
  }
}

export async function getReviewPerPage(spotId: number, page: number) {
  try {
    const res = await api.get(
      `/place/main/review?spotId=${spotId}&page=${page}`,
    );
    return res.data;
  } catch {
    throw new Error('에러발생');
  }
}
