import { EmptyInterface } from '../../types/EmptyTypes';
import EmptyIcon from './assets/empty.svg';
import styles from './assets/empty.module.css';

export default function EmptyBox({
  mainText,
  subText,
  btnText,
  clickHandler,
}: EmptyInterface) {
  return (
    <section className={styles.container}>
      <img src={EmptyIcon} alt="empty-illustration" className={styles.img} />
      <h3 className={styles.main}>{mainText}</h3>
      <p className={styles.sub}>{subText}</p>
      <button className={styles.btn} onClick={clickHandler}>
        {btnText}
      </button>
    </section>
  );
}
