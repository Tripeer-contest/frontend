import React from 'react';
import styles from './inputBox.module.css';

interface InputBoxProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputBox = ({
  placeholder,
  value,
  onChange,
  onKeyDown,
}: InputBoxProps) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default InputBox;
