import { RegionType } from '../../../types/ItemTypes.ts';
import api from '../../../utils/api.ts';

export const getTownList = async (city: RegionType) => {
  const response = await api.get('/place/town', {
    params: { cityId: city.cityId, townName: -1 },
  });

  const townList = response.data.data;

  townList[0].townName = '전체';

  return { townList };
};
