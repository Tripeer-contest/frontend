import styles from '../../../assets/map/mapNav/recommend.module.css';
import RecommendHeader from '../recommend/RecommendHeader';
import RecommendContent from '../recommend/RecommendContent';

export default function RecommendPlace() {
  return (
    <>
      <div className={styles.container}>
        <RecommendHeader />
        <RecommendContent />
      </div>
    </>
  );
}
