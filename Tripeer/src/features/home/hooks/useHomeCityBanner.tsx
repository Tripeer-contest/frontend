import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store.tsx';
import { TownList } from '../../../data/TownList.ts';

const useHomeCityBanner = () => {
  const [h_setTownList, h_setNowCityId, h_setTownId, h_setNowPlaceId] =
    zustandStore(
      useShallow((state) => [
        state.h_setTownList,
        state.h_setNowCityId,
        state.h_setNowTownId,
        state.h_setNowPlaceId,
      ]),
    );

  const cityClickHandler = (cityId: number) => {
    h_setNowCityId(cityId);
    h_setTownId(0);
    h_setNowPlaceId(0);

    const result = TownList.find((item) => item.id === cityId);

    if (result) h_setTownList(result.town);
  };

  return { cityClickHandler };
};

export default useHomeCityBanner;
