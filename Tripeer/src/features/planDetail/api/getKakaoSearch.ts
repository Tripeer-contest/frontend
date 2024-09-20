import axios from 'axios';

export default async function getKakaoSearch(keyword: string, page: number) {
  try {
    const res = await axios.get(
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=${keyword}&page=${page}`,
      {
        headers: {
          Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_KEY}`,
        },
      },
    );
    return res.data;
  } catch {
    throw new Error('에러발생');
  }
}
