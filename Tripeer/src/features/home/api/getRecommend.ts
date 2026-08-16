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

  const randomIndexes = new Set<number>();

  const MAX_LENGTH = 3;
  while (randomIndexes.size < MAX_LENGTH) {
    randomIndexes.add(Math.floor(Math.random() * data.length));
  }

  const recommendations = Array.from(randomIndexes).map((index) => data[index]);

  return recommendations;
};

export default getRecommend;
