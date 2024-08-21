import { PlanNavInterface } from '../../../types/PlanTypes';
import useNavBtn from '../hooks/useNavBtn';
import exit from '../assets/exit.svg';
import styles from '../assets/shortNav.module.css';
import { useNavigate } from 'react-router-dom';

export default function PlanShortNav({ page, setPage }: PlanNavInterface) {
  const { calendarBtn, mapBtn, chatBtn } = useNavBtn(page);
  const navigate = useNavigate();

  return (
    <aside className={styles.container}>
      <header className={styles.bannerBox}>
        <div className={styles.banner} />
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
