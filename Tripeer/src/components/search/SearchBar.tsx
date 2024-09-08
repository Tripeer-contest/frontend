import { ChangeEvent, InputHTMLAttributes } from 'react';
import styles from './searchbar.module.css';

export interface SearchProps {
  text: string;
  textHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({
  text,
  textHandler,
  ...rest
}: SearchProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      {...rest}
      className={`${rest.className} ${styles.searchInput}`}
      value={text}
      onChange={textHandler}
    />
  );
}
