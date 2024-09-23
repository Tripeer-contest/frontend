import api from '../../../utils/api.ts';

const getReadMore = async (cityId: number, townId: number, keyword: string) => {
  const res = await api.get('/place/recommend/keyword', {
    params: {
      cityId: cityId === 0 ? -1 : cityId,
      townId: townId === 0 ? -1 : townId,
      keyword,
    },
  });

  return res.data.data;
};

export default getReadMore;
