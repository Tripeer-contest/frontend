import zustandStore from '../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';

const useModal = () => {
  const [setIsModal] = zustandStore(
    useShallow((state) => [state.c_setIsModal]),
  );

  const backHandler = () => {
    setIsModal(false);
  };

  const onClickHandler = () => {
    setIsModal(true);
  };

  return { onClickHandler, backHandler };
};

export default useModal;
