import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../../assets/map/mapNav/recommend.module.css';
import RecommendCard from './RecommendCard';
import 'swiper/css';
import zustandStore from '../../../../../store/store';
import useGetRecommendQuery from '../../../hooks/useGetRecommend';
import useParamsId from '../../../../spot/hooks/useParamsId';
import { useShallow } from 'zustand/react/shallow';
import SmallLoading from '../../../../../components/loading/SmallLoading';

import {
  RecommendInterface,
  SpotInterface,
} from '../../../../../types/PlanDetailTypes';
import { useEffect } from 'react';

export default function RecommendContent() {
  const id = useParamsId();
  const [townInfo, townIdx, setSort] = zustandStore(
    useShallow((state) => [
      state.room_townList,
      state.room_selectedTownIdx,
      state.room_setSortType,
    ]),
  );
  const { data, isLoading, isError } = useGetRecommendQuery(
    id,
    townInfo[townIdx].cityId,
    townInfo[townIdx].townId,
  );

  useEffect(() => {
    setSort('');
  }, [setSort]);

  return (
    <>
      {!isLoading && !isError && data && (
        <main className={styles.contentContainer}>
          {data.map((itemlist: RecommendInterface, idx: number) => {
            return (
              <section className={styles.cardlistBox} key={idx}>
                <h1 className={styles.title}>{itemlist.comment}</h1>
                <Swiper
                  slidesPerView={'auto'}
                  spaceBetween={20}
                  style={{ display: 'flex' }}
                >
                  {itemlist.spotInfoDtos.map((card: SpotInterface) => {
                    return (
                      <SwiperSlide
                        key={card.spotInfoId}
                        style={{ width: '150px' }}
                      >
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
      {isError && <div className={styles.loadingBox}>에러발생</div>}
    </>
  );
}
