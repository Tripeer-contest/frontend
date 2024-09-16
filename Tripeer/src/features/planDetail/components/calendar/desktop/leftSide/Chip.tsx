import styles from '../../../../assets/calendar/Desktop/leftSide/chip.module.css';
import { getCategoryStyle } from '../../../../../../data/categoryStyle.ts';

interface Props {
  contentType: string;
}

const Chip = ({ contentType }: Props) => {
  const category = getCategoryStyle(contentType);
  return (
    <main className={styles.container}>
      <img src={category.icon} alt={'Category Icon'} />
      <p className={styles.title} style={{ color: `${category.color}` }}>
        {contentType}
      </p>
    </main>
  );
};

export default Chip;
