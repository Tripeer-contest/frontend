import { HTMLAttributes, useCallback } from 'react';
import useModal, { ModalProps } from '../../../hooks/useModal';
import styles from '../assets/common/modal.module.css';

export default function usePlanDetailModal() {
  const { open, close, ModalLayout } = useModal();

  const PlanModal = useCallback(
    ({
      children,
      onClose,
      ...rest
    }: ModalProps & HTMLAttributes<HTMLDialogElement>) => {
      return (
        <ModalLayout
          onClose={onClose}
          {...rest}
          className={`${rest.className} ${styles.container}`}
        >
          {children}
        </ModalLayout>
      );
    },
    [ModalLayout],
  );

  return {
    open,
    close,
    PlanModal,
  };
}
