// 내부 모듈
import styles from '../diaryDetail.module.css';

// 외부 모듈
import { ReactNode } from 'react';

export default function DetailLayout({ children }: { children: ReactNode }) {
  return <main className={styles.container}>{children}</main>;
}
