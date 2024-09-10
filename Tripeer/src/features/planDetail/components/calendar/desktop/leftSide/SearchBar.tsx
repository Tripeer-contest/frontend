import styles from '../../../../assets/calendar/Desktop/leftSide/searchBar.module.css';
import searchImage from '../../../../../home/assets/search.png';

const SearchBar = () => {
  return (
    <main className={styles.container}>
      <img
        src={searchImage}
        alt={'Search Image'}
        className={styles.searchImage}
      />
      <input className={styles.input} placeholder={'검색어를 입력해주세요'} />
    </main>
  );
};

export default SearchBar;
