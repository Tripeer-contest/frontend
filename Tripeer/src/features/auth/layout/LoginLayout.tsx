// 내부 모듈
import styles from '../login.module.css';

// 외부 모듈
import { ReactNode } from 'react';

export default function LoginLayout({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
