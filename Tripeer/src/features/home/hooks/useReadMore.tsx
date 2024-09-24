import getReadMore from '../api/getReadMore.ts';
import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store.tsx';
import { useNavigate } from 'react-router-dom';

const useReadMore = (keyword: string) => {
  const [cityId, townId] = zustandStore(
    useShallow((state) => [state.h_nowCityId, state.h_nowTownId]),
  );

  const navigate = useNavigate();

  const onClickHandler = async () => {
    const data = await getReadMore(cityId, townId, keyword);
    navigate('/home/recommend', { state: { data } });
  };
  return { onClickHandler };
};

export default useReadMore;
