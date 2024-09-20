import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from '../../assets/notify/container.module.css';

export default function NotifyContainer({
  isActive,
  children,
}: {
  isActive: boolean;
  children: ReactNode;
}) {
  const [animation, setAnimation] = useState('');
  const timerId = useRef<null | number>(null);

  useEffect(() => {
    if (isActive === false) {
      setAnimation('');
      if (timerId.current) clearTimeout(timerId.current);
    }
    if (isActive) {
      setAnimation(styles.active);
      const id = setTimeout(() => {
        setAnimation('');
        if (timerId.current) clearTimeout(timerId.current);
      }, 3000);
      // @ts-ignore
      timerId.current = id;
    }
  }, [isActive]);

  return (
    <aside className={`${styles.container} ${animation}`}>{children}</aside>
  );
}
