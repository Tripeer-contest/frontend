import logo from '../../assets/logo/logo_4.png';
import styles from './redirectPage.module.css';

export default function RedirectPage() {
  return (
    <div>
      <div className={styles.main}>
        <img src={logo} alt={'logo'} className={styles.image} />
      </div>
    </div>
  );
}
