import { RegionType } from '../../../types/ItemTypes';
import { useMutation } from '@tanstack/react-query';
import { getTownList } from '../api/getTownList.ts';
import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store.tsx';

const useHomeCityBanner = () => {
  const data = [
    {
      cityId: -1,
      description: '',
      townId: -1,
      townImg: '',
      townName: '전체',
    },
  ];

  const [h_setTownList, h_setNowCityId, h_setTownId] = zustandStore(
    useShallow((state) => [
      state.h_setTownList,
      state.h_setNowCityId,
      state.h_setNowTownId,
    ]),
  );

  const changeIdx = (idx: number) => {
    if (idx === 0) {
      return -1;
    } else if (idx > 8) {
      return idx + 22;
    } else {
      return idx;
    }
  };

  const cityClickHandler = (city: RegionType) => {
    const cityId = city.cityId === 0 ? -1 : city.cityId;

    if (cityId === -1) {
      h_setNowCityId(-1);
      h_setTownList(data);
    } else {
      h_setTownId(-1);
      h_setNowCityId(city.cityId);
      mutation.mutate(city);
    }
  };

  const mutation = useMutation({
    mutationFn: getTownList,
    onSuccess: ({ townList }) => {
      h_setTownList(townList);
    },
    onError: (error) => {
      console.log('Get TownName Failed: ', error);
    },
  });

  return { cityClickHandler, changeIdx };
};

export default useHomeCityBanner;
