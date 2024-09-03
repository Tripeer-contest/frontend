// 내부 모듈
import zustandStore from '../../../store/store';
import styles from '../diaryDetail.module.css';

// 외부 모듈
import { ReactNode, useRef } from 'react';

export default function DetailLayout({ children }: { children: ReactNode }) {
  const setScrollFn = zustandStore((state) => state.setDiaryScrollFn);
  const containerRef = useRef<HTMLDivElement | null>(null);
  setScrollFn((offset: number) => {
    if (containerRef.current)
      containerRef.current.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
  });
  return (
    <main className={styles.container} ref={containerRef}>
      {children}
    </main>
  );
}
