import zustandStore from '../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';

const usePlaceChip = () => {
  const [h_nowPlaceId, h_setNowPlaceId] = zustandStore(
    useShallow((state) => [state.h_nowPlaceId, state.h_setNowPlaceId]),
  );

  const chipClickHandler = (id: number) => {
    if (id !== h_nowPlaceId) {
      h_setNowPlaceId(id);
    }
  };

  return { chipClickHandler };
};

export default usePlaceChip;
