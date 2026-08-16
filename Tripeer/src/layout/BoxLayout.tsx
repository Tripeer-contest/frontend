import { ReactNode } from 'react';

import styles from './box.module.css';
import useScroll from '../hooks/useScroll';

export default function BoxLayout({ children }: { children: ReactNode }) {
  const { setScrollRef } = useScroll();

  return (
    <div className={styles.container} ref={setScrollRef}>
      {children}
    </div>
  );
}
