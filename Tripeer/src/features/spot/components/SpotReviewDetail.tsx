import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';

import SpotLine from './SpotLine';
import useModal from '../../../hooks/useModal';
import styles from '../assets/review.module.css';
import { getRateImg } from '../../../utils/rating';
import { ReviewInterface } from '../../../types/PlaceType';
import { daysAgo } from '../../../utils/utilDate';
import { handleErrorImg } from '../../../data/defaultImg';
import UserReport from '../../planDetail/components/chat/UserReport';

export default function SpotReviewDetail({
  review,
}: {
  review: ReviewInterface;
}) {
  const [img, setImg] = useState('');
  const { ModalLayout, close, open } = useModal();
  const ReportModal = useModal();
  const imgClickHandler = (img: string) => {
    setImg(img);
    open();
  };
  const closeHandler = () => {
    close();
    setImg('');
  };
  return (
    <>
      <div className={styles.jump}>
        <section className={styles.container}>
          <div className={styles.reviewBox}>
            <div className={styles.userBox} onClick={ReportModal.open}>
              <img
                className={styles.userImg}
                alt="user-image"
                src={review.profileImage}
                onError={handleErrorImg}
              />
              <div className={styles.userInfo}>
                <p className={styles.userName}>{review.nickname}</p>
                <div className={styles.rateUserBox}>
                  <img
                    className={styles.star}
                    src={getRateImg(review.starPoint)}
                    alt="rate-img"
                  />
                  <p className={styles.rateUser}>{review.starPoint}</p>
                </div>
              </div>
            </div>
            <ReportModal.ModalLayout
              className={styles.reportBox}
              onClick={(e) => {
                e.currentTarget === e.target && ReportModal.close();
              }}
            >
              <UserReport
                close={ReportModal.close}
                nickname={review.nickname}
                userImg={review.profileImage}
              />
            </ReportModal.ModalLayout>
            <div className={styles.reviewDetail}>
              <Swiper
                spaceBetween={20}
                slidesPerView={'auto'}
                style={{ width: '100%' }}
              >
                {review.img.map((data, idx) => {
                  return (
                    <SwiperSlide key={idx} style={{ width: '130px' }}>
                      <img
                        src={data}
                        alt="리뷰 이미지"
                        className={styles.reviewImg}
                        onClick={() => imgClickHandler(data)}
                        onError={handleErrorImg}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <p className={styles.reviewText}>{review.message}</p>
              <p className={styles.reviewDate}>{daysAgo(review.createTime)}</p>
            </div>
          </div>
        </section>
        <SpotLine />
      </div>
      <ModalLayout
        onClick={closeHandler}
        style={{
          outline: 'none',
          backgroundColor: 'transparent',
          width: '100vw',
          height: '100vh',
          maxWidth: '100vw',
          maxHeight: '100vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '90vw',
            height: '90vh',
            maxWidth: '90vw',
            maxHeight: '90vh',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <img
            src={img}
            alt="fullsize-img"
            style={{ width: '90%', height: 'auto', objectFit: 'contain' }}
            onClick={closeHandler}
            onError={handleErrorImg}
          />
        </div>
      </ModalLayout>
    </>
  );
}
