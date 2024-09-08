import styles from '../assets/aside.module.css';

export default function MyPageAside() {
  return (
    <aside className={styles.container}>
      <h3 className={styles.subTitle}>MYPAGE</h3>
      <h1 className={styles.title}>마이 페이지</h1>
      <div className={styles.description}>만나서 반갑습니다. 회원님</div>
    </aside>
  );
}
