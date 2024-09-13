import { InputHTMLAttributes } from 'react';
import styles from '../../assets/common/search.module.css';
import searchBtnImg from '../../../../assets/button/light_search.svg';

export default function LightSearchBar({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        {...rest}
        className={`${rest.className} ${styles.search}`}
      />
      <img src={searchBtnImg} className={styles.searchIcon} alt="search-icon" />
    </div>
  );
}
