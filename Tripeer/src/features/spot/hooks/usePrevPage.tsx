import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function usePrevPage() {
  const [prevPage, setPrevNull] = zustandStore(
    useShallow((state) => [state.spot_prevPage, state.spot_setPrevNull]),
  );
  const navigate = useNavigate();

  useEffect(() => {
    return () =>
      window.location.pathname === prevPage ? setPrevNull() : undefined;
  }, [setPrevNull, prevPage]);

  const goBack = () => {
    if (prevPage) {
      navigate(prevPage);
      setPrevNull();
    }
  };
  return { goBack, prevPage };
}
