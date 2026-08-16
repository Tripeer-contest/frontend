import styles from '../assets/aside.module.css';

export default function MyPageAside({
  description,
  subTitle,
  title,
}: {
  subTitle: string;
  title: string;
  description: string;
}) {
  return (
    <aside className={styles.container}>
      <h3 className={styles.subTitle}>{subTitle}</h3>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.description}>{description}</div>
    </aside>
  );
}
