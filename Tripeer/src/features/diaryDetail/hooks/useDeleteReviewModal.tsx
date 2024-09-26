import { useCallback } from 'react';
import useModal from '../../../hooks/useModal';
import styles from '../components/detailCard.module.css';
import closeIcon from '../../../assets/button/cancel_whiteGray.svg';

export default function useDeleteReviewModal() {
  const { open, close, ModalLayout } = useModal();

  const DeleteReviewModal = useCallback(
    ({ handleConfirm }: { handleConfirm: () => void }) => {
      return (
        <ModalLayout className={styles.deleteModalBox} onClick={close}>
          <div className={styles.deleteModalTopBox}>
            <div className={styles.closeBoxs}></div>
            <div className={styles.deleteModalTitle}>
              해당 리뷰를 삭제하시겠습니까?
            </div>
            <img
              src={closeIcon}
              alt="close-icon"
              className={styles.closeBoxs}
              onClick={close}
            />
          </div>
          <div className={styles.btnBox}>
            <div className={styles.cancelBtn} onClick={close}>
              취소
            </div>
            <div
              className={styles.confirmBtn}
              onClick={() => {
                handleConfirm();
                close;
              }}
            >
              확인
            </div>
          </div>
        </ModalLayout>
      );
    },
    [ModalLayout, close],
  );
  return { open, close, DeleteReviewModal };
}
