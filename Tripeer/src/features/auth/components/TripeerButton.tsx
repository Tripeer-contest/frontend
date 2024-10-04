import styles from '../login.module.css';
import tripeer_icon from '../../../assets/auth/tripeer.svg';

export default function TripeerButton({
  loginModeChange,
}: {
  loginModeChange: () => void;
}) {
  return (
    <>
      <div
        className={styles.socialBtn}
        style={{ backgroundColor: '#04ACB5', color: '#fff' }}
        onClick={loginModeChange}
      >
        <img
          src={tripeer_icon}
          className={styles.socialImg}
          alt="트리피어 아이콘"
        />
        <p>트리피어 계정으로 시작하기</p>
      </div>
    </>
  );
}
