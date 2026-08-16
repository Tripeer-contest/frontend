import styles from './nextRegister.module.css';
import React from 'react';

interface Props {
  nextHandler: () => void;
  text: string;
}

const NextRegister: React.FC<Props> = ({ nextHandler, text }) => {
  return (
    <div className={styles.next} onClick={nextHandler}>
      {text}
    </div>
  );
};

export default NextRegister;
