import useNavBtn from '../hooks/useNavBtn';
import styles from '../assets/nav/fullNav.module.css';
import exit from '../assets/icon/exit.svg';
import { useNavigate } from 'react-router-dom';
import zustandStore from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';
import Tripeer_Logo from '../../../assets/full_logo.webp';
import useUnreadChat from '../hooks/useUnreadChat';

export default function PlanFullNav() {
  const [page, setPage] = zustandStore(
    useShallow((state) => [state.room_page, state.room_setPage]),
  );
  const { calendarBtn, mapBtn, chatBtn } = useNavBtn(page);
  const navigate = useNavigate();
  const haveNewChat = useUnreadChat();
  return (
    <aside className={styles.container}>
      <header className={styles.bannerBox}>
        <img src={Tripeer_Logo} alt="Tripeer-logo" className={styles.banner} />
      </header>
      <div className={styles.controller}>
        <div className={styles.pageInfo}>
          <button onClick={() => setPage(0)}>
            <img src={chatBtn.img} alt="chat-icon" />
            <span style={chatBtn.style}>채팅</span>
            {haveNewChat && <div className={styles.unread} />}
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
