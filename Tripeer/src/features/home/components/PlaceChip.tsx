import styles from '../modules/placeChip.module.css';
import zustandStore from '../../../store/store.tsx';
import usePlaceChip from '../hooks/usePlaceChip.tsx';

interface Props {
  title: string;
  id: number;
}

const PlaceChip = ({ title, id }: Props) => {
  const h_nowPlaceId = zustandStore((state) => state.h_nowPlaceId);
  const { chipClickHandler } = usePlaceChip();

  return (
    <div
      className={`${styles.container} ${id === h_nowPlaceId ? styles.check : ''}`}
      onClick={() => chipClickHandler(id)}
    >
      <p>{title}</p>
    </div>
  );
};

export default PlaceChip;
