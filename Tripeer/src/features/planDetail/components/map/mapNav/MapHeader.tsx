import styles from '../../../assets/map/mapNav/placeMap.module.css';
import PlanHamburger from '../../common/PlanHamburger';

export default function MapHeader({
  close,
  modalVisible,
}: {
  modalVisible: boolean;
  close: () => void;
}) {
  return (
    <header className={styles.headerBox}>
      <div className={styles.hamburgerBtn}>
        <PlanHamburger />
      </div>
      {modalVisible && (
        <div className={styles.closeBtn} onClick={close}>
          X
        </div>
      )}
    </header>
  );
}
