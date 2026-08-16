import { useState } from 'react';
import styles from '../../../assets/calendar/Mobile/footer.module.css';
import rootImage from '../../../assets/calendar/assets/root.png';
import PlanNavigate from '../common/PlanNavigate.tsx';
import useIsMobileSize from '../../../hooks/useIsMobileSize.tsx';
import zustandStore from '../../../../../store/store.tsx';

const RootBtn = () => {
  const [isShow, setIsShow] = useState(false);
  const nowDay = zustandStore((state) => state.c_nowDay);
  const isMobile = useIsMobileSize();
  return (
    <>
      <main className={styles.rootBtn} onClick={() => setIsShow(true)}>
        <img src={rootImage} alt={'Root Image'} className={styles.rootImage} />
      </main>
      {isShow && (
        <PlanNavigate
          startIdx={isMobile ? nowDay + 1 : 0}
          closeHandler={() => setIsShow(false)}
        />
      )}
    </>
  );
};

export default RootBtn;
