import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store.tsx';

const useTownChip = () => {
  const [h_nowTownId, h_setNowTownId] = zustandStore(
    useShallow((state) => [state.h_nowTownId, state.h_setNowTownId]),
  );

  const chipClickHandler = (id: number) => {
    if (id !== h_nowTownId) {
      h_setNowTownId(id);
    }
    // mutation.mutate();
  };

  return { chipClickHandler };
};

export default useTownChip;
