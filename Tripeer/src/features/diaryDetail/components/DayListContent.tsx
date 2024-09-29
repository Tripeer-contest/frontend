import styles from './detailCard.module.css';
import { DayListCard } from '../../diary/types/DiaryTypes';
import { getCategoryStyle } from '../../../data/categoryStyle';
import { getRateImg } from '../../../utils/rating';
import { useState } from 'react';
import useDeleteReviewModal from '../hooks/useDeleteReviewModal';
import CreateReviewModal from './CreateReviewModal';
import { useDiaryReviewRemove } from '../hooks/useDiaryQuery';
import useParamsId from '../../spot/hooks/useParamsId';
import Notify from '../../planDetail/components/notify/Notify';
import warningImg from '../../../assets/error/warn.svg';
import { handleErrorImg } from '../../../data/defaultImg';

export default function DayListContent({ card }: { card: DayListCard }) {
  const { open, DeleteReviewModal } = useDeleteReviewModal();
  const [isClick, setIsClick] = useState(0);
  const [checkSpotName, setCheckSpotName] = useState('');
  const [isCreateReview, setIsCreateReview] = useState(false);
  const id = useParamsId();
  const { mutate, isError } = useDiaryReviewRemove('' + id);
  const handleConfirm = () => {
    mutate({ spotReviewId: isClick });
  };
  return (
    <div className={styles.dayListContainer}>
      {card.planDetailList.map((item, idx: number) => {
        return (
          <main key={idx} className={styles.dayListBox}>
            <div className={styles.orderBox}>
              <div
                className={styles.orderCircle}
                style={{
                  backgroundColor: getCategoryStyle(item.contentType).color,
                }}
              >
                {idx + 1}
              </div>
              <div className={styles.orderLine}></div>
              {idx === card.planDetailList.length - 1 ? (
                <div className={styles.closeCircle}></div>
              ) : (
                <></>
              )}
            </div>
            <div className={styles.textContent}>
              <p className={styles.title}>{item.title}</p>
              <div className={styles.starBox}>
                <img
                  src={getRateImg(item.starPointAvg)}
                  alt="star-rating-icon"
                />
              </div>
              <p className={styles.address}>{item.address}</p>
              <div className={styles.bottomSection}>
                <div className={styles.contentTypeBox}>
                  <img
                    src={getCategoryStyle(item.contentType).icon}
                    alt="category-icon"
                    className={styles.contentIcon}
                  />
                  <p
                    className={styles.content}
                    style={{ color: getCategoryStyle(item.contentType).color }}
                  >
                    {item.contentType}
                  </p>
                </div>
                {item.writeReview ? (
                  <p
                    className={styles.deleteReviewBtn}
                    onClick={() => {
                      console.log(item.title);
                      setIsClick(item.spotReviewId);
                      open();
                    }}
                  >
                    리뷰 삭제
                  </p>
                ) : (
                  <p
                    className={styles.createReviewBtn}
                    onClick={() => {
                      setCheckSpotName(item.title);
                      setIsClick(item.spotId);
                      setIsCreateReview(true);
                    }}
                  >
                    리뷰 작성
                  </p>
                )}
              </div>
            </div>
            <section className={styles.imgBox}>
              <img
                src={item.image}
                className={styles.img}
                alt="spot-image"
                onError={handleErrorImg}
              />
            </section>
          </main>
        );
      })}
      <DeleteReviewModal handleConfirm={handleConfirm} />
      {isCreateReview && (
        <CreateReviewModal
          isClick={isClick}
          checkSpotName={checkSpotName}
          setIsCreateReview={setIsCreateReview}
        />
      )}
      <Notify
        isActive={isError}
        message="네트워크 상태가 불안정하여 리뷰 삭제를 실패하였습니다."
        title={'경고'}
        img={warningImg}
      />
    </div>
  );
}
