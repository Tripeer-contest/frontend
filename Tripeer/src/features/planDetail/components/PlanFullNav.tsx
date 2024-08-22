import { PlanNavInterface } from '../../../types/PlanTypes';
import useNavBtn from '../hooks/useNavBtn';
import styles from '../assets/fullNav.module.css';
import exit from '../assets/exit.svg';
import { useNavigate } from 'react-router-dom';

export default function PlanFullNav({ page, setPage }: PlanNavInterface) {
  const { calendarBtn, mapBtn, chatBtn } = useNavBtn(page);
  const navigate = useNavigate();

  return (
    <aside className={styles.container}>
      <header className={styles.bannerBox}>
        <h1 className={styles.banner}>Tripeer</h1>
      </header>
      <div className={styles.controller}>
        <div className={styles.pageInfo}>
          <button onClick={() => setPage(0)}>
            <img src={chatBtn.img} alt="chat-icon" />
            <span style={chatBtn.style}>채팅</span>
          </button>
          <button onClick={() => setPage(1)}>
            <img src={mapBtn.img} alt="map-icon" />
            <span style={mapBtn.style}>지도</span>
          </button>
          <button onClick={() => setPage(2)}>
            <img src={calendarBtn.img} alt="calendar-icon" />
            <span style={calendarBtn.style}>일정</span>
          </button>
        </div>
        <button onClick={() => navigate('/plan')}>
          <img src={exit} alt="exit-icon" />
          <span>돌아가기</span>
        </button>
      </div>
    </aside>
  );
}
