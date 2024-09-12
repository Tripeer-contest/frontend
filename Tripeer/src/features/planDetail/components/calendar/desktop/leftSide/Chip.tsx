import styles from '../../../../assets/calendar/Desktop/leftSide/chip.module.css';
import { PlaceCategoryTypes } from '../../../../../../types/PlaceCategoryTypes.ts';
import useChip from '../../hooks/useChip.tsx';

interface Props {
  item: PlaceCategoryTypes;
}

const Chip = ({ item }: Props) => {
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
        />
      )}
      <p className={isCheck ? styles.titleCheck : styles.title}>{item.name}</p>
    </main>
  );
};

export default Chip;
