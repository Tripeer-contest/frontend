import { useEffect, useState } from 'react';
import zustandStore from '../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';

const useChip = (id: number) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const [c_nowCategory, c_setNowCategory] = zustandStore(
    useShallow((state) => [state.c_nowCategory, state.c_setNowCategory]),
  );

  const clickHandler = () => {
    id !== c_nowCategory && c_setNowCategory(id);
  };

  useEffect(() => {
    if (id === c_nowCategory) setIsCheck(true);
    else setIsCheck(false);
  }, [c_nowCategory, id]);

  return { clickHandler, isCheck };
};

export default useChip;
