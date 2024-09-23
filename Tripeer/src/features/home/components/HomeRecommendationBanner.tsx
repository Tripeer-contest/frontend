import styles from '../modules/homeRecommendationBanner.module.css';
import HomeSlide from './HomeSlide.tsx';
import { RecommendType } from '../../../types/PlaceType.ts';
import useReadMore from '../hooks/useReadMore.tsx';

interface Props {
  data: RecommendType;
}

const HomeRecommendationBanner = ({ data }: Props) => {
  const { onClickHandler } = useReadMore(data.keyword);

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <p className={styles.title}>{data.comment}</p>
        <section className={styles.readMoreSection}>
          <div className={styles.readMore} onClick={onClickHandler}>
            더보기
          </div>
        </section>
      </div>
      <HomeSlide data={data} />
    </div>
  );
};

export default HomeRecommendationBanner;
