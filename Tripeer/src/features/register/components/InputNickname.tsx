import styles from './inputNickname.module.css';
import React from 'react';

interface Props {
  placeholder: string;
  value: string;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputNickname: React.FC<Props> = ({
  placeholder,
  value,
  inputHandler,
  onKeyDown,
}) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={inputHandler}
      onKeyDown={onKeyDown}
    />
  );
};

export default InputNickname;
