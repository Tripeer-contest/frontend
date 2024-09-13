import styles from '../assets/notice/notice.module.css';
import { useNoticeQuery } from '../hooks/useMyInfoQuery';
import { summary } from '../../../types/NoticeTypes';
import useIntersectionScroll from '../../../hooks/useIntersectionScroll';
import useShowContent from '../hooks/useShowContent';

export default function NoticeContent() {
  const { data, isLoading, fetchNextPage, hasNextPage } = useNoticeQuery();
  const { setRef } = useIntersectionScroll(fetchNextPage);
  const { heightState, setHeightRef, showContent } = useShowContent();

  return (
    <section className={styles.container}>
      <ul className={styles.box}>
        {!isLoading &&
          data &&
          data.pages.map((page) =>
            page.summaryList.map((notice: summary) => (
              <li
                key={notice.noticeId}
                className={styles.noticeContainer}
                onClick={() => showContent(notice.noticeId)}
                style={{
                  height: `${(heightState[notice.noticeId] ? heightState[notice.noticeId] : 0) + 85}px`,
                }}
              >
                <div className={styles.noticeBox}>
                  <p>{`[공지사항] ${notice.title}`}</p>
                  <p>{notice.createTime}</p>
                </div>
                <div
                  className={styles.content}
                  ref={(elem) => setHeightRef(elem, notice.noticeId)}
                >
                  {notice.title}
                </div>
              </li>
            )),
          )}
        {!isLoading && hasNextPage && (
          <li className={styles.ballBox} ref={setRef}>
            <div className={styles.ball} />
            <div className={styles.ball} />
            <div className={styles.ball} />
          </li>
        )}
      </ul>
    </section>
  );
}
