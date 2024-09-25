import { useCallback } from 'react';
import useModal from '../../../hooks/useModal';
import styles from '../components/detailCard.module.css';
import closeIcon from '../../../assets/button/cancel_whiteGray.svg';

export default function useDeleteReviewModal() {
  const { open, close, ModalLayout } = useModal();

  const delOpen = useCallback(() => {
    open();
  }, [open]);

  const delClose = useCallback(() => {
    close();
  }, [close]);

  const DeleteReviewModal = useCallback(
    ({ isClick }: { isClick: number }) => {
      return (
        <ModalLayout className={styles.deleteModalBox} onClick={delClose}>
          <div className={styles.deleteModalTopBox}>
            <div className={styles.closeBoxs}></div>
            <div className={styles.deleteModalTitle}>
              {isClick}
              해당 리뷰를 삭제하시겠습니까?
            </div>
            <img
              src={closeIcon}
              alt="close-icon"
              className={styles.closeBoxs}
              onClick={delClose}
            />
          </div>
          <div className={styles.btnBox}>
            <div className={styles.cancelBtn} onClick={delClose}>
              취소
            </div>
            <div className={styles.confirmBtn} onClick={delClose}>
              확인
            </div>
          </div>
        </ModalLayout>
      );
    },
    [ModalLayout, delClose],
  );
  return { delOpen, delClose, DeleteReviewModal };
}
