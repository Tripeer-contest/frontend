import { useCallback } from 'react';
import useModal from '../../../hooks/useModal';
import styles from '../components/diaryCards.module.css';

export default function useDeleteModal() {
  const { open, close, ModalLayout } = useModal();

  const DeleteModal = useCallback(() => {
    return (
      <ModalLayout className={styles.modalContainer}>
        <div className={styles.modalBox}>
          <h3 className={styles.modalContent}>
            해당 여행 기록을 삭제하시겠습니까?
          </h3>
          <div className={styles.btnBox}>
            <button className={styles.modalCancelBtn} onClick={close}>
              취소
            </button>
            <button className={styles.modalConfirmBtn} onClick={close}>
              확인
            </button>
          </div>
        </div>
      </ModalLayout>
    );
  }, [close, ModalLayout]);

  return { open, close, DeleteModal };
}
