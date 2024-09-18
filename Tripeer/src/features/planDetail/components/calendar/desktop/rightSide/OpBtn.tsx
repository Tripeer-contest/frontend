import styles from '../../../../assets/calendar/Desktop/rightSide/opBtn.module.css';
import { useMutation } from '@tanstack/react-query';
import postAtoB from '../../../../api/postAtoB.ts';
import zustandStore from '../../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';

interface Props {
  startId: number;
  endId: number;
  option: string;
}

const OpBtn = () => {
  const [totalYList] = zustandStore(
    useShallow((state) => [state.room_totalYList]),
  );
  const clickHandler = () => {
    const startId = totalYList[0][0].spotInfoId;
    const endId = totalYList[0][1].spotInfoId;
    const option = '0';
    mutation.mutate({ startId, endId, option });
  };

  const mutation = useMutation({
    mutationFn: ({ startId, endId, option }: Props) =>
      postAtoB(startId, endId, option),
  });

  return (
    <main className={styles.container} onClick={clickHandler}>
      최단거리계산
    </main>
  );
};

export default OpBtn;
