import styles from '../modules/homeLoading.module.css';
import { forwardRef } from 'react';

const HomeLoading = forwardRef<HTMLDivElement | null, unknown>(
  function HomeLoading(_, ref) {
    return (
      <div className={styles.container} ref={ref}>
        Loading....
      </div>
    );
  },
);

export default HomeLoading;
