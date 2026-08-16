import styles from '../../../assets/calendar/Mobile/calendar.module.css';
import left from '../../../assets/calendar/assets/left.png';
import right from '../../../assets/calendar/assets/right.png';
import Footer from './Footer.tsx';
import useDaySelect from '../hooks/useDaySelect.tsx';
import DndBanner from './DndBanner.tsx';
import { DragDropContext } from '@hello-pangea/dnd';
import useDesktopDnd from '../hooks/useDesktopDnd.tsx';
import OpBtn from '../desktop/rightSide/OpBtn.tsx';

const Body = () => {
  const { dayContent, idx, leftHandler, rightHandler } = useDaySelect();
  const { onDragend } = useDesktopDnd(true);

  return (
    <main className={styles.body}>
      <section className={styles.selectBox}>
        <div className={styles.dayBox}>
          <img
            src={left}
            alt={'Left Image'}
            className={styles.selectImage}
            onClick={leftHandler}
          />
          <div className={styles.dayTextBox}>
            <p className={styles.dayP}>{idx + 1}일차</p>
            <p className={styles.dayContent}>{dayContent}</p>
          </div>
          <img
            src={right}
            alt={'Right Image'}
            className={styles.selectImage}
            onClick={rightHandler}
          />
        </div>
        <div className={styles.optBox}>
          <OpBtn day={dayContent} idx={idx + 1} />
        </div>
      </section>
      <DragDropContext onDragEnd={onDragend}>
        <DndBanner idx={idx} />
      </DragDropContext>
      <Footer idx={idx} />
    </main>
  );
};

export default Body;
