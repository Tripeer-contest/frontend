import { ReactNode, useRef } from 'react';

import styles from './box.module.css';
import zustandStore from '../store/store';

export default function BoxLayout({ children }: { children: ReactNode }) {
  const setScrollFn = zustandStore((state) => state.setScrollFn);
  const containerRef = useRef<HTMLDivElement | null>(null);
  setScrollFn((offset: number) => {
    if (containerRef.current)
      containerRef.current.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
  });
  return (
    <div className={styles.container} ref={containerRef}>
      {children}
    </div>
  );
}
