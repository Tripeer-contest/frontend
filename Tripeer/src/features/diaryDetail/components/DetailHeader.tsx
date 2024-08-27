import { useNavigate } from 'react-router-dom';
import backIcon from '../../../assets/button/back.svg';
import styles from '../diaryDetail.module.css';

export default function DetailHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/diary');
  };
  return (
    <header className={styles.headerSection}>
      <img
        src={backIcon}
        className={styles.backIcon}
        alt="back-icon"
        onClick={() => {
          goBack();
        }}
      />
      <div>전체일정</div>
    </header>
  );
}
