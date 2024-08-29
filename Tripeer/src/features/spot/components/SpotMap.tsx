import { useEffect, useRef, useState } from 'react';
import Map from '../../../components/map/Map';
import styles from '../assets/map.module.css';

export default function SpotMap() {
  const [isClip, setIsClip] = useState(false);
  const timerId = useRef<number | undefined>();

  const saveClipBoard = () => {
    navigator.clipboard.writeText('주소').then(() => {
      if (timerId.current) {
        clearTimeout(timerId.current);
        timerId.current = undefined;
      }
      setIsClip(true);
      timerId.current = setTimeout(() => {
        setIsClip(false);
        clearTimeout(timerId.current);
        timerId.current = undefined;
      }, 2500);
    });
  };

  const showClipConfirm = () => {
    return isClip ? styles.clipConfirm : styles.disappear;
  };

  useEffect(() => {
    return () => {
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, []);
  return (
    <>
      <p className={showClipConfirm()}>클립보드에 복사가 완료되었습니다.</p>
      <section className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.title}>장소 정보</h3>
          <p className={styles.updateBtn}>정보 업데이트</p>
        </div>
        <div className={styles.mapBox}>
          <div className={styles.map}>
            <Map setMap={() => {}} />
          </div>
          <div className={styles.mapInfo}>
            <p className={styles.info}>부산 해운대구 해운대로 570번길 </p>
            <p className={styles.func} onClick={saveClipBoard}>
              주소 복사
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
