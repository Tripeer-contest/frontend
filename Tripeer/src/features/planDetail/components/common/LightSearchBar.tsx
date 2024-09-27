import { InputHTMLAttributes, KeyboardEvent, useRef } from 'react';
import styles from '../../assets/common/search.module.css';
import searchBtnImg from '../../../../assets/button/light_search.svg';
import zustandStore from '../../../../store/store';

export default function LightSearchBar({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  const setKeyword = zustandStore((state) => state.room_setMapSearchKeyword);

  const $input = useRef<HTMLInputElement | null>(null);
  const searchHandler = () => {
    const $elem = $input.current;
    if ($elem) {
      setKeyword($elem.value);
      $elem.value = '';
    }
  };
  const keyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      searchHandler();
    }
  };

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        {...rest}
        className={`${rest.className} ${styles.search}`}
        ref={$input}
        onKeyUp={keyDown}
      />
      <img
        src={searchBtnImg}
        className={styles.searchIcon}
        alt="search-icon"
        onClick={searchHandler}
      />
    </div>
  );
}
