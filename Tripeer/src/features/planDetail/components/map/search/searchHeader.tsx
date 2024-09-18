import useModal from '../../../../../hooks/useModal';
import styles from '../../../assets/map/header.module.css';
import PlanHamburger from '../../common/PlanHamburger';
import TownController from '../mapNav/TownController';

export default function SearchHeader() {
  const { ModalLayout, close, open } = useModal();
  return (
    <>
      <header className={styles.header}>
        <div className={styles.funcBox}>
          <div className={styles.leftSection}>
            <PlanHamburger />
            <TownController />
          </div>
          <div className={styles.addPlaceBtn} onClick={open}>
            신규 장소 등록
          </div>
        </div>
      </header>
      <ModalLayout>
        <button onClick={close}>close</button>
      </ModalLayout>
    </>
  );
}
