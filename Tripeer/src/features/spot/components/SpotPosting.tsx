import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../assets/posting.module.css';

import 'swiper/css';
import { cleanHTMLString, truncateText } from '../../../utils/utilString';
import useSpotDetailQuery from '../hooks/useSpotDetailQuery';
import { blogInfoInterface } from '../../../types/PlaceType';
import { makeDateToString } from '../../../utils/utilDate';
import { handleErrorImg } from '../../../data/defaultImg';

export default function SpotPosting({ id }: { id: number }) {
  const { data } = useSpotDetailQuery<blogInfoInterface[]>(
    id,
    (data) => data.data.blogInfoList,
  );
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>관련 블로그 포스팅</h3>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        style={{ width: '100%' }}
        nested={true}
      >
        {data.map((blog, idx) => {
          return (
            <SwiperSlide
              className={styles.cardPosting}
              key={idx}
              onClick={() => window.open(blog.url)}
            >
              <img
                src={blog.thumbnail}
                alt="blog-img"
                className={styles.img}
                onError={handleErrorImg}
              />
              <div className={styles.contentInfo}>
                <p className={styles.infoTitle}>
                  {cleanHTMLString(truncateText(blog.title, 10))}
                </p>
                <p className={styles.infoContent}>
                  {cleanHTMLString(truncateText(blog.contents, 40))}
                </p>
              </div>
              <span className={styles.dayInfo}>
                {makeDateToString(blog.datetime)}
              </span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
