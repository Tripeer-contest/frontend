import styles from '../assets/config.module.css';
import ConfigNickname from './ConfigNickname';
import ConfigBirth from './ConfigBirth';
import ConfigStyle from './ConfigStyle';
import ConfigImage from './ConfigImage';

export default function MyConfigMenu() {
  return (
    <main className={styles.container}>
      <div className={styles.aboutBox}>
        <ConfigImage />
        <div className={styles.contentBox}>
          <ConfigNickname />
          <ConfigBirth />
          <ConfigStyle />
        </div>
      </div>
      <div className={styles.btnBox}>
        <div>취소</div>
        <div>수정 완료</div>
      </div>
    </main>
  );
}
