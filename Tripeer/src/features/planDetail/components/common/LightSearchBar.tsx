import { InputHTMLAttributes } from 'react';
import styles from '../../assets/common/search.module.css';

export default function LightSearchBar({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      {...rest}
      className={`${rest.className} ${styles.search}`}
    />
  );
}
