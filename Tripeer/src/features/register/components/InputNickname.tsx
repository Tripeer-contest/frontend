import styles from './inputNickname.module.css';
import React from 'react';

interface Props {
  placeholder: string;
  value: string;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNickname: React.FC<Props> = ({
  placeholder,
  value,
  inputHandler,
}) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={inputHandler}
    />
  );
};

export default InputNickname;
