import styles from './errorPage.module.css';
import errorPageImg from './assets/errorPageImg.svg';
import { useNavigate } from 'react-router-dom';

export default function ErrorContent() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/home');
  };
  return (
    <main className={styles.container}>
      <div className={styles.contentBox}>
        <img src={errorPageImg} className={styles.errorImg} alt="error-image" />
        <p>알 수 없는 오류가 발생하였습니다.</p>
        <p>잠시 후 다시 시도해주세요,</p>
        <div
          className={styles.backBtn}
          onClick={() => {
            goHome();
          }}
        >
          돌아가기
        </div>
      </div>
    </main>
  );
}
