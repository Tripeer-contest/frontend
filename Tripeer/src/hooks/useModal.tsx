import {
  HTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
}

let dialogPolyfill: any = null;

const loadDialogPolyfill = async ($elem: HTMLElement) => {
  if (!('HTMLDialogElement' in window) && $elem) {
    if (!dialogPolyfill) dialogPolyfill = await import('dialog-polyfill');
    dialogPolyfill.default.registerDialog($elem);
  }
};

const useModal = () => {
  const dialogRef = useRef<null | HTMLDialogElement>(null);

  const open = useCallback(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  const close = useCallback(() => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, []);

  const ModalLayout = useCallback(
    ({
      children,
      onClose,
      ...rest
    }: ModalProps & HTMLAttributes<HTMLDialogElement>) => {
      const closeHandler = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target !== e.currentTarget) return;
        if (onClose) onClose();
      };

      return createPortal(
        <dialog ref={dialogRef} onClose={closeHandler} {...rest}>
          <div id="modal-container" style={{ width: '100%', height: '100%' }}>
            {children}
          </div>
        </dialog>,
        document.getElementById('modal-root') as Element,
      );
    },
    [],
  );

  useEffect(() => {
    if (dialogRef.current) {
      loadDialogPolyfill(dialogRef.current);
    }
  }, [dialogRef]);

  return { open, close, ModalLayout };
};

export default useModal;
