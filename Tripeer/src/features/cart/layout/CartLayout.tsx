import { ReactNode } from 'react';

import styles from '../asset/page.module.css';

export default function CartLayout({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}
