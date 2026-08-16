import styles from './cancel.module.css';
import React from 'react';

interface Props {
  cancelHandler: () => void;
}

const CancelRegister: React.FC<Props> = ({ cancelHandler }) => {
  return (
    <div className={styles.cancel} onClick={cancelHandler}>
      취소
    </div>
  );
};

export default CancelRegister;
