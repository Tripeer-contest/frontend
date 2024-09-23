import api from '../../../utils/api.ts';

const getRecommend = async (
  cityId: number,
  townId: number,
  contentTypeId: number,
) => {
  const typeArr = [contentTypeId, 39, 32, contentTypeId];
  const res = await api.get('/place/recommend/home', {
    params: {
      cityId: cityId === 0 ? -1 : cityId,
      townId: townId === 0 ? -1 : townId,
      contentTypeId: typeArr[contentTypeId],
    },
  });

  const data = res.data.data;

  const rdIdx1 = Math.floor(Math.random() * data.length);
  let rdIdx2;

  do {
    rdIdx2 = Math.floor(Math.random() * data.length);
  } while (rdIdx2 === rdIdx1);

  const recommend_1 = data[rdIdx1];
  const recommend_2 = data[rdIdx2];

  return [recommend_1, recommend_2];
};

export default getRecommend;
