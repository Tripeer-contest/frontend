import styles from '../../../assets/map/mapNav/placeList.module.css';
import PlanHamburger from '../../common/PlanHamburger';

export default function ListhHeader() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.funcBox}>
          <PlanHamburger />
          <p>우리들의 여행지 목록</p>
        </div>
      </header>
    </>
  );
}
