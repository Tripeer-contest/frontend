import styles from '../../../assets/calendar/Mobile/footer.module.css';
import rootImage from '../../../assets/calendar/assets/root.png';

const RootBtn = () => {
  return (
    <main className={styles.rootBtn}>
      <img src={rootImage} alt={'Root Image'} className={styles.rootImage} />
    </main>
  );
};

export default RootBtn;
