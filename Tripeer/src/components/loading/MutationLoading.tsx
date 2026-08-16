import { useEffect } from 'react';
import useModal from '../../hooks/useModal';
import styles from './assets/loading.module.css';

export default function MutationLoading({ isShow }: { isShow: boolean }) {
  const { ModalLayout, open, close } = useModal();
  useEffect(() => {
    if (isShow) open();
    else close();
  }, [isShow, open, close]);
  return (
    <ModalLayout className={styles.mutationContainer} onClose={() => {}}>
      <div className={styles.mutationBox}>
        <div className={styles.ball} />
        <div className={styles.ball} />
        <div className={styles.ball} />
      </div>
    </ModalLayout>
  );
}
