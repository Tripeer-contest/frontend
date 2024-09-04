import { useCallback } from 'react';
import useModal from '../../../hooks/useModal';
import styles from '../diaryDetail.module.css';
import { useGetDayListQuery } from './useGetDiary';
import { useParams } from 'react-router-dom';
import { makeDayToDotFullString } from '../../../utils/utilDate';
import closeIcon from '../../../assets/button/cancel_gray.svg';
import zustandStore from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';

export default function useSelectDayModal() {
  const [dayScroll, scrollTo] = zustandStore(
    useShallow((state) => [state.diaryDayScroll, state.diaryScrollTo]),
  );
  const { open, close, ModalLayout } = useModal();
  const params = useParams();
  const data = useGetDayListQuery(params.id);

  const scrollHandler = useCallback(
    (idx: number) => {
      if (dayScroll && scrollTo) {
        scrollTo(dayScroll[idx]);
      }
    },
    [dayScroll, scrollTo],
  );

  const scrollTopHandler = useCallback(() => {
    scrollTo && scrollTo(0);
  }, [scrollTo]);

  const SelectDayModal = useCallback(() => {
    return (
      <ModalLayout className={styles.modalContainer} onClick={close}>
        <div className={styles.modalBox}>
          <div className={styles.modalHeader}>
            <p className={styles.titleText}>날짜 선택</p>
            <img
              className={styles.closeIcon}
              src={closeIcon}
              alt="close-icon"
              onClick={() => {
                close();
              }}
            />
          </div>
          <div className={styles.selectScrollBox}>
            <div className={styles.selectBox}>
              <p className={styles.selectText} onClick={scrollTopHandler}>
                전체 날짜
              </p>
              {data.map((item, idx: number) => {
                return (
                  <p
                    className={styles.selectText}
                    key={idx}
                    onClick={() => scrollHandler(idx)}
                  >
                    {idx + 1}일차,{' '}
                    <span>{makeDayToDotFullString(item.date)}</span>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </ModalLayout>
    );
  }, [data, close, ModalLayout, scrollHandler, scrollTopHandler]);
  return { open, close, SelectDayModal };
}
