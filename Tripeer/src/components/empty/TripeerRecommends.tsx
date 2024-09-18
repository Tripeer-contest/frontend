import styles from './assets/recommends.module.css';
import RecommendSlide from './RecommendSlide';

export default function TripeerRecommends({
  className,
}: {
  className?: string;
}) {
  const container = className ? className : styles.container;
  return (
    <figure className={container}>
      <h3>트리피어가 추천하는 여행지 둘러보기</h3>
      <RecommendSlide />
    </figure>
  );
}
