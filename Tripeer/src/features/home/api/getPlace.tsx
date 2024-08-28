import api from '../../../utils/api.ts';

export const getPlace = async (
  h_nowCityId: number,
  h_nowTownId: number,
  h_nowPlaceId: number,
  pageParams: number,
) => {
  let contentTypeId = -1;
  if (h_nowPlaceId === 1) {
    contentTypeId = 39;
  } else if (h_nowPlaceId === 2) {
    contentTypeId = 32;
  } else if (h_nowPlaceId === 3) {
    contentTypeId = 100;
  }

  const res = await api.get('/place/search', {
    params: {
      contentTypeId,
      cityId: h_nowCityId,
      townId: h_nowTownId,
      page: pageParams,
    },
  });

  return res.data.data;
};
