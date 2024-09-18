import zustandStore from '../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';
import usePlanDetailModal from '../../../hooks/usePlanDetailModal.tsx';

const useOpt = () => {
  const [totalYList, timeYList] = zustandStore(
    useShallow((state) => [state.room_totalYList, state.room_timeYList]),
  );

  const { close, PlanModal } = usePlanDetailModal();

  const onClickHandler = () => {
    console.log(totalYList[1]);
    console.log(timeYList[1]);

    // open();
  };

  return { onClickHandler, close, PlanModal };
};

export default useOpt;
