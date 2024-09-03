import useNavBtn from '../hooks/useNavBtn';
import exit from '../assets/icon/exit.svg';
import styles from '../assets/nav/shortNav.module.css';
import { useNavigate } from 'react-router-dom';
import zustandStore from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';
import Tripper_icon from '../../../assets/tripeer_icon.webp';

export default function PlanShortNav() {
  const [page, setPage] = zustandStore(
    useShallow((state) => [state.room_page, state.room_setPage]),
  );
  const { calendarBtn, mapBtn, chatBtn } = useNavBtn(page);
  const navigate = useNavigate();

  return (
    <aside className={styles.container}>
      <header className={styles.bannerBox}>
        <img src={Tripper_icon} alt="Tripeer-icon" className={styles.banner} />
      </header>
      <div className={styles.controller}>
        <div className={styles.pageInfo}>
          <button onClick={() => setPage(0)}>
            <img src={chatBtn.img} alt="chat-icon" />
          </button>
          <button onClick={() => setPage(1)}>
            <img src={mapBtn.img} alt="map-icon" />
          </button>
          <button onClick={() => setPage(2)}>
            <img src={calendarBtn.img} alt="calendar-icon" />
          </button>
        </div>
        <button onClick={() => navigate('/plan')}>
          <img src={exit} alt="exit-icon" />
        </button>
      </div>
    </aside>
  );
}
