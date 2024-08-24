import styles from '../modules/townChip.module.css';
import useCategoryChip from '../hooks/useCategoryChip.tsx';
import zustandStore from '../../../store/store.tsx';

interface Props {
  title: string;
  id: number;
}

const TownChip = ({ title, id }: Props) => {
  const h_nowTownId = zustandStore((state) => state.h_nowTownId);
  const { chipClickHandler } = useCategoryChip();

  return (
    <div
      className={`${styles.container} ${id === h_nowTownId ? styles.check : ''}`}
      onClick={() => chipClickHandler(id)}
    >
      {title}
    </div>
  );
};

export default TownChip;
