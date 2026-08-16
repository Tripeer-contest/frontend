import styles from '../../../../assets/calendar/Desktop/leftSide/category.module.css';
import { PlaceCategoryTypes } from '../../../../../../types/PlaceCategoryTypes.ts';
import useChip from '../../hooks/useChip.tsx';
import { handleErrorImg } from '../../../../../../data/defaultImg.ts';

interface Props {
  item: PlaceCategoryTypes;
}

const Category = ({ item }: Props) => {
  const imageArr = ['', styles.resImg, styles.stayImg, styles.mecImg];
  const { clickHandler, isCheck } = useChip(item.id);

  return (
    <main
      className={`${styles.container} ${isCheck && styles.check}`}
      onClick={clickHandler}
    >
      {item.image && (
        <img
          src={isCheck ? item.unImage : item.image}
          alt={'Category Image'}
          className={imageArr[item.id]}
          onError={handleErrorImg}
        />
      )}
      <p className={isCheck ? styles.titleCheck : styles.title}>{item.name}</p>
    </main>
  );
};

export default Category;
