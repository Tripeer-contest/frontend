import styles from '../../../../assets/calendar/Desktop/leftSide/categoryList.module.css';
import { placeCategory } from '../../../../../../data/placeCategory.ts';
import Category from './Category.tsx';

const CategoryList = () => {
  return (
    <main className={styles.container}>
      {placeCategory.map((item) => (
        <Category key={item.id} item={item} />
      ))}
    </main>
  );
};

export default CategoryList;
