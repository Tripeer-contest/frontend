import styles from '../../../../assets/calendar/Desktop/leftSide/leftSide.module.css';
import SearchBar from './SearchBar.tsx';
import TitleBox from './TitleBox.tsx';
import CategoryList from './CategoryList.tsx';

const LeftSide = () => {
  return (
    <main className={styles.container}>
      <TitleBox />
      <div className={styles.line} />
      <SearchBar />
      <CategoryList />
      <div className={styles.line} />
    </main>
  );
};

export default LeftSide;
