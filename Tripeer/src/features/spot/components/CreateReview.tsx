import ContentLayout from '../../../layout/ContentLayout';
import useParamsId from '../hooks/useParamsId';
import styles from '../assets/createReview.module.css';
import backIcon from '../../../assets/button/back.svg';
import useSpotDetailQuery from '../hooks/useSpotDetailQuery';
import { ReviewInterface } from '../../../types/PlaceType';
import noImage from '../assets/img/imgIcon.svg';
import { useNavigate } from 'react-router-dom';
import BoxLayout from '../../../layout/BoxLayout';
import emptyStar from '../assets/img/empty_star.svg';

export default function CreateReview() {
  interface ShortQueryType {
    title: string;
    contentType: string;
    starPointAvg: number;
    reviewDtoList: ReviewInterface[];
    reviewTotalCount: number;
  }
  const navigate = useNavigate();
  const spotId = useParamsId();
  const { data } = useSpotDetailQuery<ShortQueryType>(spotId, (data) => ({
    title: data.data.title,
    contentType: data.data.contentType,
    reviewDtoList: data.data.reviewDtoList,
    starPointAvg: data.data.starPointAvg,
    reviewTotalCount: data.data.reviewTotalCount,
  }));
  return (
    <BoxLayout>
      <div style={{ height: '100%' }}>
        <ContentLayout>
          <main className={styles.container}>
            <header className={styles.headerBox}>
              <img
                src={backIcon}
                alt="back-icon"
                className={styles.backIcon}
                onClick={() => {
                  navigate(-1);
                }}
              />
              <p className={styles.spotTitle}>{data.title} </p>
            </header>
            <section className={styles.sectionBox}>
              <div className={styles.starSection}>
                <p className={styles.leftText}>
                  별점<span>*</span>
                </p>
                <div className={styles.fiveStar}>
                  <img
                    src={emptyStar}
                    className={styles.oneStar}
                    alt="rating-star"
                  />
                  <img
                    src={emptyStar}
                    className={styles.oneStar}
                    alt="rating-star"
                  />
                  <img
                    src={emptyStar}
                    className={styles.oneStar}
                    alt="rating-star"
                  />
                  <img
                    src={emptyStar}
                    className={styles.oneStar}
                    alt="rating-star"
                  />
                  <img
                    src={emptyStar}
                    className={styles.oneStar}
                    alt="rating-star"
                  />
                </div>
              </div>
              <div className={styles.reviewSection}>
                <p className={styles.leftText}>
                  리뷰작성<span>*</span>
                </p>
                <textarea className={styles.inputBox}></textarea>
              </div>
              <div className={styles.imgSection}>
                <p className={styles.leftText}>사진</p>
                <div className={styles.imgBox}>
                  <div className={styles.imgContent}>
                    <img
                      className={styles.noimg}
                      src={noImage}
                      alt="no-image"
                    />
                  </div>
                  <div className={styles.imgContent}>
                    <img
                      className={styles.noimg}
                      src={noImage}
                      alt="no-image"
                    />
                  </div>
                  <div className={styles.imgContent}>
                    <img
                      className={styles.noimg}
                      src={noImage}
                      alt="no-image"
                    />
                  </div>
                </div>
              </div>
              <p className={styles.imgText}>
                이미지 파일(GIF, PNG, JPG)을 기준으로 최대 10MB이하, 최대
                3개까지 등록 가능합니다.
              </p>
              <div className={styles.btnBox}>
                <div
                  className={styles.cancelBtn}
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  작성 취소
                </div>
                <div className={styles.confirmBtn}>작성 완료</div>
              </div>
            </section>
          </main>
        </ContentLayout>
      </div>
    </BoxLayout>
  );
}
