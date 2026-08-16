import styles from '../../../assets/calendar/Desktop/calendar.module.css';
import { DragDropContext } from '@hello-pangea/dnd';
import LeftSide from './leftSide/LeftSide.tsx';
import RightSide from './rightSide/RightSide.tsx';
import useDesktopDnd from '../hooks/useDesktopDnd.tsx';

const DesktopCalendar = () => {
  const { onDragend } = useDesktopDnd(true);

  return (
    <DragDropContext onDragEnd={onDragend}>
      <main className={styles.container}>
        <LeftSide />
        <RightSide />
      </main>
    </DragDropContext>
  );
};

export default DesktopCalendar;
