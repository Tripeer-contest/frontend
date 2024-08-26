import styles from '../modules/placeChip.module.css';
import zustandStore from '../../../store/store.tsx';
import usePlaceChip from '../hooks/usePlaceChip.tsx';

interface Props {
  title: string;
  id: number;
  image: string;
}

const PlaceChip = ({ title, id, image }: Props) => {
  const h_nowPlaceId = zustandStore((state) => state.h_nowPlaceId);
  const { chipClickHandler } = usePlaceChip();

  return (
    <div
      className={`${styles.container} ${id === h_nowPlaceId ? styles.check : ''}`}
      onClick={() => chipClickHandler(id)}
    >
      {image ? (
        <img src={image} alt={'categoryImg'} className={styles.image} />
      ) : (
        ''
      )}
      <p>{title}</p>
    </div>
  );
};

export default PlaceChip;
