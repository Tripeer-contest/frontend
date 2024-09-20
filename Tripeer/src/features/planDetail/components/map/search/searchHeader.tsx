import useMap from '../../../../../hooks/useMap';
import useModal from '../../../../../hooks/useModal';
import styles from '../../../assets/map/header.module.css';
import PlanHamburger from '../../common/PlanHamburger';
import TownController from '../mapNav/TownController';
import NewPlace from './NewPlace';

export default function SearchHeader() {
  const { ModalLayout, close, open } = useModal();
  const { setMapRef, map } = useMap();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.funcBox}>
          <div className={styles.leftSection}>
            <PlanHamburger />
            <TownController />
          </div>
          <div
            className={styles.addPlaceBtn}
            onClick={() => {
              open();
              map.relayout();
            }}
          >
            신규 장소 등록
          </div>
        </div>
      </header>
      <ModalLayout className={styles.modalContainer}>
        <NewPlace close={close} map={map} setMapRef={setMapRef} />
      </ModalLayout>
    </>
  );
}
