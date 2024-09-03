import NotifyContainer from './NotifyContainer';
import styles from '../../assets/notify/notify.module.css';
export default function Notify({
  isActive,
  title,
  message,
  img,
}: {
  isActive: boolean;
  title: string;
  message: string;
  img?: string;
}) {
  return (
    <NotifyContainer isActive={isActive}>
      <div className={styles.notifyContainer}>
        <div className={styles.notifyBox}>
          <img src={img} alt="notify-img" className={styles.img} />
          <div className={styles.infoBox}>
            <h3>{title}</h3>
            <p>{message}</p>
          </div>
        </div>
        <span className={styles.now}>지금</span>
      </div>
    </NotifyContainer>
  );
}
