import {
  MouseEvent,
  ReactNode,
  TouchEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from '../../assets/common/drag.module.css';

export default function BottomDragModal({ children }: { children: ReactNode }) {
  const MAX_BOTTOM = useRef(window.innerHeight * 0.7);
  const MIN_BOTTOM = useRef(window.innerHeight * 0.15);
  const drag = useRef(false);
  const [offset, setOffset] = useState(window.innerHeight * 0.7);

  const moveTouch = (e: TouchEvent<HTMLDivElement>) => {
    const position = e.touches[0].clientY;
    if (position > MAX_BOTTOM.current) setOffset(MAX_BOTTOM.current);
    else if (position < MIN_BOTTOM.current) setOffset(MIN_BOTTOM.current);
    else setOffset(position);
  };
  const dragStart = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    drag.current = true;
    window.addEventListener('mousemove', moveDrag);
    window.addEventListener('mouseup', dragEnd);
  };
  const dragEnd = (e: globalThis.MouseEvent) => {
    e.preventDefault();
    drag.current = false;
    window.removeEventListener('mousemove', moveDrag);
    window.removeEventListener('mouseup', dragEnd);
  };
  const moveDrag = (e: globalThis.MouseEvent) => {
    e.preventDefault();
    if (drag.current) {
      const position = e.clientY;
      if (position > MAX_BOTTOM.current) setOffset(MAX_BOTTOM.current);
      else if (position < MIN_BOTTOM.current) setOffset(MIN_BOTTOM.current);
      else setOffset(position);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      MAX_BOTTOM.current = window.innerHeight * 0.7;
      MIN_BOTTOM.current = window.innerHeight * 0.15;
    });
  }, []);

  return (
    <aside className={styles.box} style={{ top: `${offset}px` }}>
      <div
        className={styles.dragBox}
        onTouchMove={moveTouch}
        onMouseDown={dragStart}
      >
        <div className={styles.dragBtn} />
      </div>
      {children}
    </aside>
  );
}
