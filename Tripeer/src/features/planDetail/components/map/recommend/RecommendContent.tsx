import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../../assets/map/mapNav/recommend.module.css';
import RecommendCard from './RecommendCard';
import 'swiper/css';
import zustandStore from '../../../../../store/store';
import useGetRecommendQuery from '../../../hooks/useGetRecommend';
import useParamsId from '../../../../spot/hooks/useParamsId';
import { useShallow } from 'zustand/react/shallow';
import SmallLoading from '../../../../../components/loading/SmallLoading';

export default function RecommendContent() {
  const id = useParamsId();
  const [townInfo, townIdx] = zustandStore(
    useShallow((state) => [state.room_townList, state.room_selectedTownIdx]),
  );
  console.log(id, townInfo[townIdx].cityId, townInfo[townIdx].townId);
  const { data, isLoading } = useGetRecommendQuery(
    id,
    townInfo[townIdx].cityId,
    townInfo[townIdx].townId,
  );

  return (
    <>
      {!isLoading && (
        <main className={styles.contentContainer}>
          {townInfo.map((item, idx) => {
            return (
              <section className={styles.cardlistBox} key={idx}>
                <h1 className={styles.title}>호텔을 즐겨찾는 당신의 위해</h1>
                <Swiper
                  slidesPerView={'auto'}
                  spaceBetween={20}
                  style={{ display: 'flex' }}
                >
                  {[1, 2, 3, 4, 5, 6].map((card, idx) => {
                    return (
                      <SwiperSlide key={idx} style={{ width: '150px' }}>
                        <RecommendCard card={card} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </section>
            );
          })}
        </main>
      )}
      {isLoading && (
        <div className={styles.loadingBox}>
          <SmallLoading />
        </div>
      )}
    </>
  );
}
