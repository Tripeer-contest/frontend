import { useNavigate, useParams } from 'react-router-dom';
import styles from '../modules/recommendPage.module.css';
import { PlaceType } from '../../../types/PlaceType.ts';
import PlaceBox from './PlaceBox.tsx';
import SkeletonPlaceBox from './SkeletonPlaceBox.tsx';
import ToTop from './ToTop.tsx';
import usePlaceBox from '../hooks/usePlaceBox.tsx';
import useHomePlaceBanner from '../hooks/useHomePlaceBanner.tsx';
import BoxLayout from '../../../layout/BoxLayout.tsx';
import ContentLayout from '../../../layout/ContentLayout.tsx';
import backImage from '../../planDetail/assets/calendar/assets/back.png';
import {
  useRecommendMutation,
  useRecommendPageQuery,
} from '../hooks/useRecommendQuery.tsx';

const HomeRecommendPage = () => {
  const param = useParams();
  const cityId = param.cityId ? +param.cityId : -1;
  const townId = param.townId ? +param.townId : -1;
  const keyword = param.keyword ? param.keyword : '';
  const { data } = useRecommendPageQuery(cityId, townId, keyword);
  const { mutate } = useRecommendMutation(cityId, townId, keyword);
  const { clickHandler, rating } = usePlaceBox();
  const { scrollHandler } = useHomePlaceBanner();
  const navigate = useNavigate();
  return (
    <BoxLayout>
      <ContentLayout>
        <div className={styles.container}>
          <div className={styles.titleBox} onClick={() => navigate(-1)}>
            <img
              src={backImage}
              alt={'Back Image'}
              className={styles.backImage}
            />
            <p className={styles.title}>{data.comment}</p>
          </div>
          <div className={styles.gridBox}>
            {data
              ? data.spotInfoDtos.map((place: PlaceType) => (
                  <div key={place.spotId} className={styles.cardBox}>
                    <PlaceBox
                      place={place}
                      clickHandler={() => clickHandler(place.spotId)}
                      likeClickHandler={(e) => {
                        e.stopPropagation();
                        mutate({ spotId: place.spotId, like: place.wishlist });
                      }}
                      rating={rating}
                    />
                  </div>
                ))
              : Array.from({ length: 20 }).map((_, idx) => (
                  <SkeletonPlaceBox key={idx} />
                ))}
          </div>
          <ToTop scrollHandler={scrollHandler} />
        </div>
      </ContentLayout>
    </BoxLayout>
  );
};

export default HomeRecommendPage;
