import styles from './alarm.module.css';
import alarm_icon from '../../assets/button/alarm.svg';
import {
  useAlarmQuery,
  useInviteMutation,
  useRemoveAlarmMutation,
} from '../../hooks/useAlarmQuery';
import useModal from '../../hooks/useModal';
import back_icon from '../../assets/button/back.svg';
import direct_icon from '../../assets/button/arrow.svg';
import { useState } from 'react';
import useIntersectionScroll from '../../hooks/useIntersectionScroll';
import MutationLoading from '../loading/MutationLoading';
import Notify from '../../features/planDetail/components/notify/Notify';
import warn_icon from '../../assets/error/warn.svg';

export default function Alarm() {
  const { data, fetchNextPage, isError, isLoading, hasNextPage } =
    useAlarmQuery();
  const { ModalLayout, close, open } = useModal();
  const [openIdx, setOpenIdx] = useState(-1);
  const { setRef } = useIntersectionScroll(fetchNextPage);
  const inviteMutation = useInviteMutation();
  const removeMutation = useRemoveAlarmMutation();
  return (
    <>
      <div className={styles.container} onClick={open}>
        <div className={styles.box}>
          <img src={alarm_icon} alt="alarm-icon" className={styles.alarm} />
          {data && data.pages[0].list && data.pages[0].list.length ? (
            <div className={styles.red} />
          ) : undefined}
        </div>
      </div>
      <ModalLayout className={styles.modalContainer}>
        <Notify
          isActive={inviteMutation.isError}
          img={warn_icon}
          title="에러"
          message={
            inviteMutation.error
              ? '' + inviteMutation.error
              : '네트워크 연결이 불안정합니다.'
          }
        />
        <header className={styles.header}>
          <img src={back_icon} alt="back-icon" onClick={close} />
          <p>알림</p>
        </header>
        <div className={styles.contentBox}>
          {data &&
            data.pages.map((page) => (
              <>
                {page.list.map((notify: any) => (
                  <div
                    key={notify.id}
                    className={styles.card}
                    onClick={() =>
                      setOpenIdx((prev) =>
                        prev === notify.id ? -1 : notify.id,
                      )
                    }
                  >
                    <div className={styles.cardHeader}>
                      <p className={styles.type}>
                        {notify.type !== 'USER_INVITED' ? '소식' : '초대'}
                      </p>
                      <div />
                      <p className={styles.title}>{notify.title}</p>
                      <img
                        style={{
                          transform: `rotate(${openIdx === notify.id ? -90 : 90}deg)`,
                        }}
                        src={direct_icon}
                        alt="direct-icon"
                        className={styles.direct}
                      />
                    </div>
                    <p className={styles.content}>{notify.content}</p>
                    <p className={styles.date}>{notify.date}</p>
                    {openIdx === notify.id && (
                      <div className={styles.btnBox}>
                        {notify.type === 'USER_INVITED' ? (
                          <>
                            <div
                              className={styles.cancelBtn}
                              onClick={(e) => {
                                e.stopPropagation();
                                removeMutation.mutate({ alarmId: notify.id });
                              }}
                            >
                              거절
                            </div>
                            <div
                              className={styles.confirmBtn}
                              onClick={(e) => {
                                e.stopPropagation();
                                inviteMutation.mutate({
                                  planId: notify.targetId,
                                  alarmId: notify.id,
                                });
                              }}
                            >
                              수락
                            </div>
                          </>
                        ) : (
                          <div
                            className={styles.deleteBtn}
                            onClick={(e) => {
                              e.stopPropagation();
                              removeMutation.mutate({ alarmId: notify.id });
                            }}
                          >
                            삭제하기
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </>
            ))}
          {!data || !data.pages[0].list.length ? (
            <div className={styles.empty}>알림이 텅 비었습니다.</div>
          ) : undefined}
          {!isLoading &&
            hasNextPage &&
            data &&
            data?.pages.length &&
            !isError && (
              <li className={styles.ballBox} ref={setRef}>
                <div className={styles.ball} />
                <div className={styles.ball} />
                <div className={styles.ball} />
              </li>
            )}
        </div>
      </ModalLayout>

      <MutationLoading isShow={inviteMutation.isPending} />
    </>
  );
}
