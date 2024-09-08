import styles from '../modules/placeChip.module.css';
import zustandStore from '../../../store/store.tsx';
import usePlaceChip from '../hooks/usePlaceChip.tsx';

interface Props {
  title: string;
  id: number;
  image: string;
  unImage: string;
}

const imageArr = ['', styles.resImg, styles.stayImg, styles.mecImg];

const PlaceChip = ({ title, id, image, unImage }: Props) => {
  const h_nowPlaceId = zustandStore((state) => state.h_nowPlaceId);
  const { chipClickHandler } = usePlaceChip();

  return (
    <div
      className={`${styles.container} ${id === h_nowPlaceId ? styles.check : ''}`}
      onClick={() => chipClickHandler(id)}
    >
      {image && (
        <img
          src={id === h_nowPlaceId ? unImage : image}
          alt={'categoryImg'}
          className={imageArr[id]}
        />
      )}
      <p>{title}</p>
    </div>
  );
};

export default PlaceChip;
