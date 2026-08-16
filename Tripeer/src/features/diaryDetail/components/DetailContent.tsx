// 내부 모듈
import styles from '../diaryDetail.module.css';

// 외부 모듈
import { ReactNode } from 'react';
import useDiaryScroll from '../hooks/useDiaryScroll';
import { useParams } from 'react-router-dom';
import { useGetDayListQuery } from '../hooks/useGetDiary';

export default function DetailLayout({ children }: { children: ReactNode }) {
  const params = useParams();
  const data = useGetDayListQuery(params.id);
  const { setScrollRef, onScroll } = useDiaryScroll(data.length);

  return (
    <main className={styles.container} ref={setScrollRef} onScroll={onScroll}>
      {children}
    </main>
  );
}
