import api from '../../../utils/api.ts';

const RESTAURANT = 39;
const STAY = 32;
const MECCA = 100;

export const getPlace = async (
  h_nowCityId: number,
  h_nowTownId: number,
  h_nowPlaceId: number,
  pageParams: number,
) => {
  let contentTypeId = -1;
  if (h_nowPlaceId === 1) {
    contentTypeId = RESTAURANT;
  } else if (h_nowPlaceId === 2) {
    contentTypeId = STAY;
  } else if (h_nowPlaceId === 3) {
    contentTypeId = MECCA;
  }
  try {
    const res = await api.get('/place/search', {
      params: {
        contentTypeId,
        cityId: h_nowCityId,
        townId: h_nowTownId,
        page: pageParams,
      },
    });
    return res.data.data;
  } catch {
    throw new Error('에러');
  }
};
