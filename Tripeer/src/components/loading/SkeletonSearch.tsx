import styles from './assets/skeleton.module.css';
import PlanSearchSkeleton from './PlanSearchSkeleton';

export default function SkeletonSearch() {
  return (
    <div className={styles.container}>
      <PlanSearchSkeleton />
      <PlanSearchSkeleton />
      <PlanSearchSkeleton />
      <PlanSearchSkeleton />
    </div>
  );
}
