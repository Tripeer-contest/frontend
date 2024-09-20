import usePlanDetailModal from '../../../hooks/usePlanDetailModal.tsx';
import { useState } from 'react';
import zustandStore from '../../../../../store/store.tsx';

const useOpt = () => {
  const { open, close, PlanModal } = usePlanDetailModal();
  const alert = usePlanDetailModal();
  const [select, setSelect] = useState<string>('');
  const [text, setText] = useState<string>('확인');
  const [isLabel, setIsLabel] = useState<boolean>(false);
  const totalYList = zustandStore((state) => state.room_totalYList);

  const onSelectHandler = (idx: string) => {
    if (select !== idx) setSelect(idx);
  };

  const onClickHandler = (idx: number) => {
    totalYList[idx].length >= 2 ? open() : alert.open();
  };

  const onSubmitHandler = (close: () => void) => {
    if (select !== '') {
      close();
      setSelect('');
      setIsLabel(false);
    } else {
      setText('이동 수단을 선택해주세요');
      setTimeout(() => setText('확인'), 1000);
    }
  };

  const onModalHandler = (close: () => void) => {
    close();
    setSelect('');
    setIsLabel(false);
  };

  const onCLickLabel = () => {
    setIsLabel(!isLabel);
  };

  return {
    onClickHandler,
    PlanModal,
    onSelectHandler,
    select,
    onSubmitHandler,
    close,
    onModalHandler,
    text,
    onCLickLabel,
    isLabel,
    alert,
  };
};

export default useOpt;
