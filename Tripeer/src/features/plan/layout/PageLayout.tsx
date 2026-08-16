// 내부 모듈
import styles from '../assets/page.module.css';

// 외부 모듈
import { ReactNode } from 'react';

export default function PageLayout({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
