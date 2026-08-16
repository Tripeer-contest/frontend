import { InputHTMLAttributes, KeyboardEvent, useRef } from 'react';
import styles from '../../assets/common/search.module.css';
import searchBtnImg from '../../../../assets/button/light_search.svg';
import zustandStore from '../../../../store/store';
import { useShallow } from 'zustand/react/shallow';

export default function DesktopLightSearchBar({
  setIsRecommendSelected,
  ...rest
}: {
  setIsRecommendSelected: (params: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>) {
  const [setKeyword, setSortType, sortType] = zustandStore(
    useShallow((state) => [
      state.room_setMapSearchKeyword,
      state.room_setSortType,
      state.room_sortType,
    ]),
  );

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

  const clickHandler = () => {
    if (sortType === '') {
      setIsRecommendSelected(false);
      setSortType('전체');
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
        onClick={clickHandler}
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
