import { ReactNode } from 'react';
import styles from '../../../assets/map/map.module.css';

export default function MapLayout({ children }: { children: ReactNode }) {
  return <div className={styles.contentLayout}>{children}</div>;
}
