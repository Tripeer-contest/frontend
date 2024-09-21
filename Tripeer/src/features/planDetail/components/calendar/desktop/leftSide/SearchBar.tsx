import styles from '../../../../assets/calendar/Desktop/leftSide/searchBar.module.css';
import searchImage from '../../../../../home/assets/search.png';
import useSearch from '../../hooks/useSearch.tsx';

const SearchBar = () => {
  const { onChangeHandler } = useSearch();

  return (
    <main className={styles.container}>
      <img
        src={searchImage}
        alt={'Search Image'}
        className={styles.searchImage}
      />
      <input
        className={styles.input}
        placeholder={'검색어를 입력해주세요'}
        onChange={onChangeHandler}
      />
    </main>
  );
};

export default SearchBar;
