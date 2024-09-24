import { useNavigate, useParams } from 'react-router-dom';
import useGetBannerQuery, { useBannerMutation } from './hook/useBannerQuery';
import BoxLayout from '../../layout/BoxLayout';
import ContentLayout from '../../layout/ContentLayout';
import styles from './assets/bannerPage.module.css';
import backImage from '../../assets/button/back.svg';
import { PlaceType } from '../../types/PlaceType';
import PlaceBox from '../../features/home/components/PlaceBox';
import SkeletonPlaceBox from '../../features/home/components/SkeletonPlaceBox';
import ToTop from '../../features/home/components/ToTop';
import usePlaceBox from '../../features/home/hooks/usePlaceBox';
import useHomePlaceBanner from '../../features/home/hooks/useHomePlaceBanner';
import HighlightKeyword from './hook/useKeywordHighlight';
import bannerData from '../../data/bannerData';

export default function BannerPage() {
  const param = useParams();
  const idx = param.idx ? +param.idx : 0;
  const cityId = bannerData[idx].cityId;
  const townId = bannerData[idx].townId;
  const keyword = bannerData[idx].keyword;
  const comment = bannerData[idx].comment;
  const { data } = useGetBannerQuery(cityId, townId, keyword);
  const { clickHandler, rating } = usePlaceBox();
  const { scrollHandler } = useHomePlaceBanner();
  const { mutate } = useBannerMutation(cityId, townId, keyword);
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
            <p className={styles.title}>
              <HighlightKeyword search={keyword} text={comment} />
            </p>
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
}
