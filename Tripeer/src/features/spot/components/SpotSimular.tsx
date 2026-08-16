import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from '../assets/simular.module.css';
import { PlaceDetailType } from '../../../types/PlaceType';
import useSpotDetailQuery, {
  useSimilarMutate,
} from '../hooks/useSpotDetailQuery';
import { useNavigate } from 'react-router-dom';
import RecommendSpotBox from '../../home/components/RecommendSpotBox';

export default function SpotSimular({ id }: { id: number }) {
  const SimilarSpot = useSpotDetailQuery<PlaceDetailType[]>(
    id,
    (data) => data.data.similarSpotList,
  );
  const NearSpot = useSpotDetailQuery<PlaceDetailType[]>(
    id,
    (data) => data.data.nearSpotList,
  );
  const navigate = useNavigate();
  const { mutate } = useSimilarMutate(id);

  const rootHandler = (id: number) => {
    navigate(`/home/spot/${id}`);
  };
  return (
    <div className={styles.marginBox}>
      <section className={styles.container}>
        <h3>이곳과 비슷한 장소는</h3>
        <Swiper
          slidesPerView={'auto'}
          style={{ width: '100%' }}
          spaceBetween={25}
        >
          {SimilarSpot.data.map((item) => (
            <SwiperSlide key={item.spotId} className={styles.itemBox}>
              <RecommendSpotBox
                clickHandler={() => rootHandler(item.spotId)}
                likeClickHandler={(e) => {
                  e.stopPropagation();
                  mutate({ like: item.wishlist, spotId: item.spotId });
                }}
                rating={item.starPointAvg}
                place={item}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className={styles.container}>
        <h3>여기 근처 가볼만한 장소는</h3>
        <Swiper
          slidesPerView={'auto'}
          style={{ width: '100%' }}
          spaceBetween={25}
        >
          {NearSpot.data.map((item) => (
            <SwiperSlide key={item.spotId} className={styles.itemBox}>
              <RecommendSpotBox
                clickHandler={() => rootHandler(item.spotId)}
                likeClickHandler={(e) => {
                  e.stopPropagation();
                  mutate({ like: item.wishlist, spotId: item.spotId });
                }}
                rating={item.starPointAvg}
                place={item}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
