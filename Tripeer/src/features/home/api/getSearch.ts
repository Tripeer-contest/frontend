import api from '../../../utils/api.ts';

const getSearch = async (page: number, keyword: string) => {
  const res = await api.get('/place/search/home', {
    params: { page, keyword },
  });

  return res.data.data;
};

export default getSearch;
