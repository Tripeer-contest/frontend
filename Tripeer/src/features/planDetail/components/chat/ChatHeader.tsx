import hamburger from '../../../../assets/hamburger.svg';
import information from '../../../../assets/button/information.svg';
import useModal from '../../../../hooks/useModal';
import touchRightToLeft from '../../../../utils/utilTouch';
import styles from '../../assets/chat/header.module.css';
import PlanFullNav from '../PlanFullNav';
import zustandStore from '../../../../store/store';

export default function ChatHeader() {
  const { ModalLayout, close, open } = useModal();
  const { touchEnd, touchMove, touchStart } = touchRightToLeft(close);
  const planTitle = zustandStore((state) => state.room_title);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.funcBox}>
          <img
            src={hamburger}
            alt="hamburger-btn"
            className={styles.hamburger}
            onClick={open}
          />
          <p>{planTitle}</p>
        </div>
        <img
          src={information}
          alt="information-btn"
          className={styles.information}
        />
      </header>
      <ModalLayout
        className={styles.modal}
        onClick={(e) => {
          if (e.currentTarget === e.target) close();
        }}
        onTouchStart={touchStart}
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
      >
        <PlanFullNav />
      </ModalLayout>
    </>
  );
}
