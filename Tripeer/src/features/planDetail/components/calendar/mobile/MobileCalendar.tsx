import styles from '../../../assets/calendar/Mobile/calendar.module.css';
import Header from './Header.tsx';
import Body from './Body.tsx';
import PlaceList from './PlaceList.tsx';
import zustandStore from '../../../../../store/store.tsx';

const MobileCalendar = () => {
  const isModal = zustandStore((state) => state.c_isModal);

  return (
    <div className={styles.container}>
      <Header />
      <Body />
      {isModal && <PlaceList />}
    </div>
  );
};

export default MobileCalendar;
