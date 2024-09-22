import styles from '../../../assets/calendar/Mobile/footer.module.css';
import PlaceAddBtn from './PlaceAddBtn.tsx';
import RootBtn from './RootBtn.tsx';
import zustandStore from '../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';

interface Props {
  idx: number;
}

const Footer = ({ idx }: Props) => {
  const [totalYList] = zustandStore(
    useShallow((state) => [state.room_totalYList]),
  );

  return (
    <main className={styles.footer}>
      <PlaceAddBtn idx={idx} />
      {totalYList[idx + 1].length >= 2 && <RootBtn />}
    </main>
  );
};

export default Footer;
