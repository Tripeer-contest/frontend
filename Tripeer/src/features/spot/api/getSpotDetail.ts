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

export async function postReview(
  reviewReq: {
    spotInfoId: string;
    starPoint: string;
    message: string;
  },
  images?: File[],
) {
  const form = new FormData();
  const blob = new Blob([JSON.stringify(reviewReq)], {
    type: 'application/json',
  });
  form.append('reviewReq', blob);

  images &&
    images.forEach((image) => {
      form.append('images', image);
    });
  try {
    const res = await api.post(`/place/review/write`, form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res.data.data;
  } catch (err: any) {
    throw new Error(err?.response?.data?.message);
  }
}
export async function deleteReview(spotReviewId: number) {
  try {
    const res = await api.delete(`/place/review/${spotReviewId}`);

    return res.data;
  } catch {
    throw new Error();
  }
}
