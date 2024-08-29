import { useCallback } from 'react';
import useModal from '../../../hooks/useModal';
import styles from '../diaryDetail.module.css';
import { useGetDayListQuery } from './useGetDiary';
import { useParams } from 'react-router-dom';
import { makeDayToDotFullString } from '../../../utils/utilDate';
import closeIcon from '../../../assets/button/cancel_gray.svg';

export default function useSelectDayModal() {
  const { open, close, ModalLayout } = useModal();
  const params = useParams();
  const data = useGetDayListQuery(params.id);
  console.log('히얼:', data);

  const SelectDayModal = useCallback(() => {
    return (
      <ModalLayout className={styles.modalContainer}>
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
              <p className={styles.selectText}>전체 날짜</p>
              {data.map((item, idx: number) => {
                return (
                  <p className={styles.selectText} key={idx}>
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
  }, [data, close, ModalLayout]);
  return { open, close, SelectDayModal };
}
