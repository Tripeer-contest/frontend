import styles from '../assets/config/config.module.css';
import useMyInfoQuery from '../hooks/useMyInfoQuery';

export default function ConfigBirth() {
  const { data } = useMyInfoQuery();
  const year = data.birth.split('-')[0];
  const month = data.birth.split('-')[1];
  const date = data.birth.split('-')[2];
  return (
    <div className={styles.gridBox}>
      <p className={styles.subTitle}>생년월일</p>
      <div className={styles.flexBox}>
        <div className={styles.date}>
          <input
            type="text"
            className={styles.dateInput}
            placeholder={year}
            disabled
          />
          <p>년</p>
        </div>
        <div className={styles.date}>
          <input
            type="text"
            className={styles.dateInput}
            placeholder={month}
            disabled
          />
          <p>월</p>
        </div>
        <div className={styles.date}>
          <input
            type="text"
            className={styles.dateInput}
            placeholder={date}
            disabled
          />
          <p>일</p>
        </div>
      </div>
    </div>
  );
}
