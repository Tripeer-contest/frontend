import {
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from '../../assets/common/drag.module.css';
import ListController from '../../../../components/controller/ListController';
import { ControllerInterface } from '../../../../types/CartTypes';

const DRAG_TOP_HEIGHT = 30;
const LIST_HEADER_HEIGHT = 57;

const TOTAL_MINUS_HEIGHT = DRAG_TOP_HEIGHT + LIST_HEADER_HEIGHT;

export default function BottomDragListModal({
  Category,
  selectedCategry,
  slideTo,
  maxWidth,
  children,
}: ControllerInterface & { children: ReactNode }) {
  const MAX_BOTTOM = useRef(window.innerHeight * 0.7);
  const MIN_BOTTOM = useRef(window.innerHeight * 0.15);
  const BOX_HEIGHT = useRef(window.innerHeight * 1.0 - TOTAL_MINUS_HEIGHT);
  const drag = useRef(false);
  const [offset, setOffset] = useState(window.innerHeight * 0.7);
  const [height, setHeight] = useState(BOX_HEIGHT.current - MAX_BOTTOM.current);

  const moveTouch = (e: TouchEvent) => {
    e.preventDefault();
    const position = e.touches[0].clientY;
    if (position > MAX_BOTTOM.current) setOffset(MAX_BOTTOM.current);
    else if (position < MIN_BOTTOM.current) setOffset(MIN_BOTTOM.current);
    else setOffset(position);
  };

  const touchRef = useCallback(($elem: HTMLDivElement | null) => {
    if ($elem) {
      $elem.addEventListener('touchmove', moveTouch, { passive: false });
    }
  }, []);
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
    if (offset) {
      setHeight(BOX_HEIGHT.current - offset);
    }
  }, [offset]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      MAX_BOTTOM.current = window.innerHeight * 0.7;
      MIN_BOTTOM.current = window.innerHeight * 0.15;
      BOX_HEIGHT.current = window.innerHeight - TOTAL_MINUS_HEIGHT;
      setOffset(MAX_BOTTOM.current);
    });
  }, []);

  return (
    <aside className={styles.box} style={{ top: `${offset}px` }}>
      <div className={styles.dragBox} ref={touchRef} onMouseDown={dragStart}>
        <div className={styles.dragBtn} />
      </div>
      <ListController
        Category={Category}
        selectedCategry={selectedCategry}
        slideTo={slideTo}
        maxWidth={maxWidth}
      />
      <div
        style={{
          height: `${height}px`,
          overflowY: 'scroll',
          scrollbarWidth: 'none',
        }}
      >
        {children}
      </div>
    </aside>
  );
}
