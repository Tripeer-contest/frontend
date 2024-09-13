import TopBanner from './TopBanner.tsx';
import styles from '../../../../assets/calendar/Desktop/rightSide/rightSide.module.css';
import DndBanner from './DndBanner.tsx';
import zustandStore from '../../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';

const RightSide = () => {
  const [totalYList] = zustandStore(
    useShallow((state) => [state.room_totalYList]),
  );

  return (
    <main className={styles.container}>
      <TopBanner />
      <div className={styles.line} />
      <div className={styles.dndBox}>
        {totalYList.map(
          (_, idx) => idx !== 0 && <DndBanner key={idx} idx={idx} />,
        )}
      </div>
    </main>
  );
};

export default RightSide;
