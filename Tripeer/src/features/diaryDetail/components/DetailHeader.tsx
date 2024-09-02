import { useNavigate } from 'react-router-dom';
import backIcon from '../../../assets/button/back.svg';
import styles from '../diaryDetail.module.css';
import useSelectDayModal from '../hooks/useSelectDayModal';
import zustandStore from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';
import { useEffect, useState } from 'react';

export default function DetailHeader() {
  const [day, setDay] = useState(0);
  const [nowScroll, dayScroll] = zustandStore(
    useShallow((state) => [state.diaryContainerScroll, state.diaryDayScroll]),
  );
  const { open, SelectDayModal } = useSelectDayModal();
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/diary');
  };

  useEffect(() => {
    if (
      dayScroll &&
      nowScroll &&
      dayScroll.findIndex((value) => value === -1) === -1
    ) {
      const idx = dayScroll.findIndex((value) => value > nowScroll + 350);
      if (idx !== -1) {
        setDay(idx);
      } else {
        setDay(dayScroll.length);
      }
    }
  }, [nowScroll, dayScroll]);
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
        {day === 0 ? '전체 일정' : `${day}일차`}
      </div>
      <SelectDayModal></SelectDayModal>
    </header>
  );
}
