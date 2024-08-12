import styles from '../assets/card.module.css';
import scheduleIcon from '../assets/schedule_icon.svg';
import navIcon from '../assets/nav_icon.svg';
import personIcon from '../assets/person_icon.svg';

export default function PlanCard() {
  return (
    <div className={styles.card}>
      <img
        src="https://images.unsplash.com/photo-1722925541914-ae7cf154d606?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className={styles.cardImg}
      />
      <div className={styles.cardInfo}>
        <p className={styles.cardTitle}>싸피 탐험대</p>
        <div className={styles.detailInfo}>
          <img src={navIcon} alt="nav-icon" className={styles.icon} />
          <p>대구 광역시</p>
        </div>
        <div className={styles.layoutInfo}>
          <div className={styles.detailInfo}>
            <img
              src={scheduleIcon}
              alt="schedule-icon"
              className={styles.icon}
            />
            <p>4월 18일(목) ~ 4월 21일(일)</p>
          </div>
          <div className={styles.detailInfo}>
            <img src={personIcon} alt="person-icon" className={styles.icon} />
            <p>5명</p>
          </div>
        </div>
      </div>
    </div>
  );
}
