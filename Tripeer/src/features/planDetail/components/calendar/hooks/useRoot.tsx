import usePlanDetailModal from '../../../hooks/usePlanDetailModal.tsx';

const useRoot = () => {
  const { open, close, PlanModal } = usePlanDetailModal();

  const clickHandler = () => {
    open();
  };

  return { clickHandler, open, close, PlanModal };
};

export default useRoot;
