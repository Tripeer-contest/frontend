import styles from '../assets/page.module.css';

export default function PlanHeader() {
  return (
    <header>
      <h1 className={styles.title}>여행 계획을 선택하거나 추가해보세요</h1>
      <h3 className={styles.subtitle}>최대 6개의 계획을 추가할 수 있습니다.</h3>
    </header>
  );
}
