import { useEffect, useState } from 'react';
import styles from './assets/loading.module.css';

export default function CommonLoading() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => {
      setShow(false);
    }, 2000);
    return () => {
      clearTimeout(id);
    };
  }, []);
  return (
    <>
      {show ? (
        <div className={styles.container}>
          <div className={styles.ball} />
          <div className={styles.ball} />
          <div className={styles.ball} />
        </div>
      ) : undefined}
    </>
  );
}
