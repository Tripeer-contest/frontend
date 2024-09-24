import { RecommendType } from '../../../types/PlaceType.ts';
import getRecommend from '../api/getRecommend.ts';
import { useShallow } from 'zustand/react/shallow';
import { useQuery } from '@tanstack/react-query';
import zustandStore from '../../../store/store.tsx';

const useHomeRecommend = () => {
  const [cityId, townId, contentTypeId] = zustandStore(
    useShallow((state) => [
      state.h_nowCityId,
      state.h_nowTownId,
      state.h_nowPlaceId,
    ]),
  );

  const query = useQuery({
    queryKey: [`homeRecommend_${cityId}_${townId}_${contentTypeId}`],
    queryFn: () => getRecommend(cityId, townId, contentTypeId),
  });

  return { recommendData: query.data as RecommendType[] };
};

export default useHomeRecommend;
