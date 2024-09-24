import { useState } from 'react';
import styles from '../../../assets/calendar/Mobile/footer.module.css';
import rootImage from '../../../assets/calendar/assets/root.png';
import PlanNavigate from '../common/PlanNavigate.tsx';

const RootBtn = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <main className={styles.rootBtn} onClick={() => setIsShow(true)}>
        <img src={rootImage} alt={'Root Image'} className={styles.rootImage} />
      </main>
      {isShow && (
        <PlanNavigate startIdx={1} closeHandler={() => setIsShow(false)} />
      )}
    </>
  );
};

export default RootBtn;
