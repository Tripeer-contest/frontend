import styles from '../modules/searchBar.module.css';
import searchImg from '../assets/search.png';
import backImg from '../assets/back.png';
import useSearchBanner from '../hooks/useSearchBanner.tsx';

const SearchBar = () => {
  const {
    inputChangeHandler,
    showModal,
    inputClickHandler,
    searchRef,
    backRef,
  } = useSearchBanner();

  return (
    <div
      className={styles.inputBox}
      onClick={inputClickHandler}
      ref={searchRef}
    >
      <img src={searchImg} alt={'searchImg'} className={styles.searchImg} />
      <input
        className={styles.input}
        placeholder={'여행지를 검색해보세요'}
        onChange={inputChangeHandler}
      />
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalBanner}>
            <img
              src={backImg}
              alt={'backBtnImage'}
              className={styles.backImg}
              ref={backRef}
            />
            <p>여행지 검색</p>
          </div>
          <div className={styles.modalSearchBar}>
            <img
              src={searchImg}
              alt={'searchImg'}
              className={styles.modalSearchImg}
            />
            <input
              className={styles.modalSearchInput}
              placeholder={'여행지를 검색해보세요'}
              onChange={inputChangeHandler}
            />
          </div>
          <div className={styles.modalSearchList}>
            <p className={styles.noneData}>검색 결과가 없습니다.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
