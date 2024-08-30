import { useNavigate } from 'react-router-dom';
import backIcon from '../../../assets/button/back.svg';
import styles from '../diaryDetail.module.css';
import useSelectDayModal from '../hooks/useSelectDayModal';

export default function DetailHeader() {
  const { open, SelectDayModal } = useSelectDayModal();
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
      <div
        className={styles.selectBtn}
        onClick={() => {
          open();
        }}
      >
        전체일정
      </div>
      <SelectDayModal></SelectDayModal>
    </header>
  );
}
