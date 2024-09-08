import styles from '../assets/menu.module.css';
import direction_icon from '../../../assets/button/arrow.svg';
import useMyInfoQuery from '../hooks/useMyInfoQuery';

export default function MyPageMenu() {
  const { data } = useMyInfoQuery();
  return (
    <main className={styles.container}>
      <div className={styles.imgBox}>
        <img
          src={data.profileImage}
          alt="profile-img"
          className={styles.profileImg}
        />
        <p className={styles.nickname}>{data.nickname}</p>
      </div>
      <div className={styles.mainBtn}>
        <span>내 정보 수정</span>
        <img src={direction_icon} alt="direction-icon" />
      </div>
      <div className={styles.part}>
        <h3 className={styles.subTitle}>고객지원</h3>
        <div className={styles.subBtn}>
          <span>공지사항</span>
          <img src={direction_icon} alt="direction-icon" />
        </div>
        <div className={styles.subBtn}>
          <span>문의하기</span>
          <img src={direction_icon} alt="direction-icon" />
        </div>
        <div className={styles.subBtn}>
          <span>초대링크 복사하기</span>
          <img src={direction_icon} alt="direction-icon" />
        </div>
      </div>
      <div className={styles.part}>
        <h3 className={styles.subTitle}>알림설정</h3>
        <div className={styles.subBtn}>
          <span>여행 소식 알림</span>
          <div className={styles.pushBtn}>
            <div className={styles.push} />
          </div>
        </div>
      </div>
      <div className={styles.part}>
        <h3 className={styles.subTitle}>로그인 설정</h3>
        <div className={styles.subBtn}>
          <span>로그아웃</span>
          <img src={direction_icon} alt="direction-icon" />
        </div>
        <div className={styles.subBtn}>
          <span>서비스 탈퇴</span>
          <img src={direction_icon} alt="direction-icon" />
        </div>
      </div>
    </main>
  );
}
