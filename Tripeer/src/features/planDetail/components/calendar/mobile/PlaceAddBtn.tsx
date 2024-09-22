import styles from '../../../assets/calendar/Mobile/footer.module.css';
import { useShallow } from 'zustand/react/shallow';
import useModal from '../hooks/useModal.tsx';
import zustandStore from '../../../../../store/store.tsx';

interface Props {
  idx: number;
}

const PlaceAddBtn = ({ idx }: Props) => {
  const [totalYList] = zustandStore(
    useShallow((state) => [state.room_totalYList]),
  );

  const { onClickHandler } = useModal();

  return (
    <main
      className={
        totalYList[idx + 1].length >= 2
          ? styles.placeAddBtn
          : styles.placeAddBtn2
      }
      onClick={onClickHandler}
    >
      여행지 추가
    </main>
  );
};

export default PlaceAddBtn;
