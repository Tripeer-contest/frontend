import usePlanDetailModal from '../../../hooks/usePlanDetailModal.tsx';
import { useState } from 'react';
import zustandStore from '../../../../../store/store.tsx';
import postOpt from '../../../api/postOpt.ts';
import { useShallow } from 'zustand/react/shallow';
import { useParams } from 'react-router-dom';
import { rePost } from '../../../../../utils/api.ts';

const useOpt = () => {
  const { open, close, PlanModal } = usePlanDetailModal();
  const alert = usePlanDetailModal();
  const [select, setSelect] = useState<string>('');
  const [text, setText] = useState<string>('확인');
  const [isLabel, setIsLabel] = useState<boolean>(false);
  const [totalYList, doc, timeYList] = zustandStore(
    useShallow((state) => [
      state.room_totalYList,
      state.y_doc,
      state.room_timeYList,
    ]),
  );

  const params = useParams();

  const onSelectHandler = (idx: string) => {
    if (select !== idx) setSelect(idx);
  };

  const onClickHandler = (idx: number) => {
    totalYList[idx].length >= 2 ? open() : alert.open();
  };

  const onSubmitHandler = async (close: () => void, idx: number) => {
    if (select !== '') {
      await rePost();
      close();
      setSelect('');
      setIsLabel(false);
      const option = isLabel ? '2' : select;

      if (doc) {
        const yArr = doc.getArray('blockYList');
        yArr.delete(idx, 1);
        yArr.insert(idx, [true]);
        params.id && postOpt(params.id, option, idx);
      }
    } else {
      setText('이동 수단을 선택해주세요');
      setTimeout(() => setText('확인'), 1000);
    }
    console.log(timeYList[1]);
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
