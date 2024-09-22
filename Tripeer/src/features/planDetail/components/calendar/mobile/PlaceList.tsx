import styles from '../../../assets/calendar/Mobile/placeLIst.module.css';
import back from '../../../assets/calendar/assets/back.png';
import SearchBar from '../desktop/leftSide/SearchBar.tsx';
import CategoryList from '../desktop/leftSide/CategoryList.tsx';
import zustandStore from '../../../../../store/store.tsx';
import { useShallow } from 'zustand/react/shallow';
import Card from './Card.tsx';
import useModal from '../hooks/useModal.tsx';

const PlaceList = () => {
  const [totalYList] = zustandStore(
    useShallow((state) => [state.room_totalYList]),
  );

  const { backHandler } = useModal();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <img
          src={back}
          alt={'Back Image'}
          className={styles.backImage}
          onClick={backHandler}
        />
        <p>여행지 목록</p>
      </header>
      <div className={styles.line} />
      <section className={styles.sectionBox}>
        <SearchBar />
        <CategoryList />
        <div className={styles.cardBox}>
          {totalYList[0]?.map((item, idx) => (
            <Card item={item} idx={idx} key={item.spotInfoId} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default PlaceList;
