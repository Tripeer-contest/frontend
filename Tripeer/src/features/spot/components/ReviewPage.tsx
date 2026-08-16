import styles from '../assets/pagination.module.css';

import { useMemo, useState } from 'react';

const Min_Current = 5;

export default function ReviewPage({
  scrollTop,
  setPage,
  maxPage,
  page,
}: {
  scrollTop: (() => void) | null;
  setPage: (page: number) => void;
  maxPage: number;
  page: number;
}) {
  const [currentMax, setCurrentMax] = useState(5);
  const pages = useMemo(
    () => Array.from({ length: maxPage }, (_, idx) => currentMax + 1 - 5 + idx),
    [currentMax, maxPage],
  );

  const goNext = () => {
    currentMax < maxPage && setCurrentMax((prev) => prev + 1);
  };

  const goPrev = () => {
    currentMax > Min_Current && setCurrentMax((prev) => prev - 1);
  };

  const isActive = (idx: number) => {
    return page === idx ? styles.active : styles.inactive;
  };

  const pageChange = (idx: number) => {
    if (page === idx) return;
    scrollTop && scrollTop();
    setPage(idx);
  };

  return (
    <aside className={styles.container}>
      <ul className={styles.pageBox}>
        <p onClick={goPrev}>{'<'}</p>

        {pages.map((page) => (
          <li
            key={page}
            className={isActive(page)}
            onClick={() => pageChange(page)}
          >
            {page}
          </li>
        ))}
        <p onClick={goNext}>{'>'}</p>
      </ul>
    </aside>
  );
}
