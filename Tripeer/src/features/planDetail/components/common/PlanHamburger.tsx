import styles from '../../assets/common/hamburger.module.css';
import hamburger from '../../../../assets/hamburger.svg';
import useModal from '../../../../hooks/useModal';
import touchRightToLeft from '../../../../utils/utilTouch';
import PlanFullNav from '../PlanFullNav';
import useUnreadChat from '../../hooks/useUnreadChat';

export default function PlanHamburger() {
  const { open, close, ModalLayout } = useModal();
  const { touchEnd, touchMove, touchStart } = touchRightToLeft(close);
  const haveNewChat = useUnreadChat();
  return (
    <>
      <div className={styles.hamburger}>
        <img
          src={hamburger}
          alt="hamburger-btn"
          className={styles.hamburger}
          onClick={open}
        />
        {haveNewChat && <div className={styles.unread} />}
      </div>
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
