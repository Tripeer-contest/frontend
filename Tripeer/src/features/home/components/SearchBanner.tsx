import styles from '../modules/searchBanner.module.css';
import searchImg from '../assets/search.png';

const SearchBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.titlePc}>여행의 시작, 여기서부터</p>
        <div className={styles.titleBox}>
          <p className={styles.titleMb}>
            여행의 시작,
            <br />
            여기서부터
          </p>
        </div>
        <p className={styles.subP}>
          다양한 여행지 한눈 살펴보세요 원하는 여행지를 검색하고, 여행에 대한
          설렘을 느껴보세요
        </p>
        <div className={styles.inputBox}>
          <img src={searchImg} alt={'searchImg'} className={styles.searchImg} />
          <input
            className={styles.input}
            placeholder={'여행지를 검색해보세요'}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBanner;
