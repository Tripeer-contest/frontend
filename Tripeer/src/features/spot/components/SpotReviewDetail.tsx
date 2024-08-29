import styles from '../assets/review.module.css';
import { getRateImg } from '../../../utils/rating';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SpotLine from './SpotLine';

const revieImg = [
  'https://t1.daumcdn.net/cfile/tistory/9906804C5FB7337315',
  'https://t1.daumcdn.net/cfile/tistory/9906804C5FB7337315',
  'https://t1.daumcdn.net/cfile/tistory/9906804C5FB7337315',
  'https://t1.daumcdn.net/cfile/tistory/9906804C5FB7337315',
  'https://t1.daumcdn.net/cfile/tistory/9906804C5FB7337315',
  'https://t1.daumcdn.net/cfile/tistory/9906804C5FB7337315',
  'https://t1.daumcdn.net/cfile/tistory/9906804C5FB7337315',
  'https://t1.daumcdn.net/cfile/tistory/9906804C5FB7337315',
];

export default function SpotReviewDetail() {
  return (
    <div className={styles.jump}>
      <section className={styles.container}>
        <div className={styles.reviewBox}>
          <div className={styles.userBox}>
            <div className={styles.userImg} />
            <div className={styles.userInfo}>
              <p className={styles.userName}>부수환</p>
              <div className={styles.rateUserBox}>
                <img
                  className={styles.star}
                  src={getRateImg(4.5)}
                  alt="rate-img"
                />
                <p className={styles.rateUser}>4.5</p>
              </div>
            </div>
          </div>
          <div className={styles.reviewDetail}>
            {revieImg.length > 0 && (
              <Swiper
                spaceBetween={20}
                slidesPerView={'auto'}
                style={{ width: '100%' }}
              >
                {revieImg.map((data, idx) => {
                  return (
                    <SwiperSlide key={idx} style={{ width: '130px' }}>
                      <img
                        src={data}
                        alt="리뷰 이미지"
                        className={styles.reviewImg}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
            <p className={styles.reviewText}>
              마퍼ㅣ마엎;ㅏㅁㄴ어피;ㅏㅁㄴ어파ㅣㅁㄴ엎;ㅏㅁㄴ엎;ㅣ만엎ㅁ;ㅣㅏ엎;ㅏㅣㅁㄴㅇ파ㅣㅁㄴ엎;ㅣ망넢
              마퍼ㅣ마엎;ㅏㅁㄴ어피;ㅏㅁㄴ어파ㅣㅁㄴ엎;ㅏㅁㄴ엎;ㅣ만엎ㅁ;ㅣㅏ엎;ㅏㅣㅁㄴㅇ파ㅣㅁㄴ엎;ㅣ망넢마퍼ㅣ마엎;ㅏㅁㄴ어피;ㅏㅁㄴ어파ㅣㅁㄴ엎;ㅏㅁㄴ엎;ㅣ만엎ㅁ;ㅣㅏ엎;ㅏㅣㅁㄴㅇ파ㅣㅁㄴ엎;ㅣ망넢마퍼ㅣ마엎;ㅏㅁㄴ어피;ㅏㅁㄴ어파ㅣㅁㄴ엎;ㅏㅁㄴ엎;ㅣ만엎ㅁ;ㅣㅏ엎;ㅏㅣㅁㄴㅇ파ㅣㅁㄴ엎;ㅣ망넢마퍼ㅣ마엎;ㅏㅁㄴ어피;ㅏㅁㄴ어파ㅣㅁㄴ엎;ㅏㅁㄴ엎;ㅣ만엎ㅁ;ㅣㅏ엎;ㅏㅣㅁㄴㅇ파ㅣㅁㄴ엎;ㅣ망넢마퍼ㅣ마엎;ㅏㅁㄴ어피;ㅏㅁㄴ어파ㅣㅁㄴ엎;ㅏㅁㄴ엎;ㅣ만엎ㅁ;ㅣㅏ엎;ㅏㅣㅁㄴㅇ파ㅣㅁㄴ엎;ㅣ망넢
            </p>
            <p className={styles.reviewDate}>1일전</p>
          </div>
        </div>
      </section>
      <SpotLine />
    </div>
  );
}
