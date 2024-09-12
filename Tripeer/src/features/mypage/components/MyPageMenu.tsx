import { useNavigate } from 'react-router-dom';
import styles from '../assets/menu.module.css';
import useMyInfoQuery from '../hooks/useMyInfoQuery';
import MyMainBtn from './button/MyMainBtn';
import MySubBtn from './button/MySubBtn';

export default function MyPageMenu() {
  const { data } = useMyInfoQuery();
  const navigate = useNavigate();
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
      <MyMainBtn name="내 정보 수정" clickHandler={() => navigate('./edit')} />
      <div className={styles.part}>
        <h3 className={styles.subTitle}>고객지원</h3>
        <MySubBtn name="공지사항" />
        <MySubBtn name="문의하기" />
        <MySubBtn name="초대링크 복사하기" />
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
        <MySubBtn name="로그아웃" />
        <MySubBtn name="서비스 탈퇴" />
      </div>
    </main>
  );
}