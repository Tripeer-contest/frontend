import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from '../components/createReviewModal.module.css';
import closeIcon from '../../../assets/button/cancel_whiteGray.svg';
import UploadImage from '../../spot/components/UploadImage';
import StarRating from '../../spot/components/StarRating';
import Notify from '../../planDetail/components/notify/Notify';
import warningImg from '../../../assets/error/warn.svg';
import { useDiaryReviewMutation } from '../hooks/useDiaryQuery';
import useParamsId from '../../spot/hooks/useParamsId';
import MutationLoading from '../../../components/loading/MutationLoading';

export default function CreateReviewModal({
  isClick,
  checkSpotName,
  setIsCreateReview,
}: {
  isClick: number;
  checkSpotName: string;
  setIsCreateReview: (params: boolean) => void;
}) {
  const message = useRef('');
  const [isCheckEmpty, setCheckEmpty] = useState(false);
  const [postImg, setPostImg] = useState<File[]>([]);
  const [previewImg, setPreviewImg] = useState<string[]>([]);
  const [rating, setRating] = useState(5);
  const id = useParamsId();
  const { mutate, isPending, isError, isSuccess } = useDiaryReviewMutation(
    '' + id,
  );
  const timerRef = useRef<null | number>(null);
  const spotId = isClick;

  const validateMessage = () => {
    if (message.current.trim() === '') {
      setCheckEmpty(true);
      return false;
    }

    return true;
  };

  const handleSubmit = (spotId: number) => {
    if (validateMessage()) {
      mutate({
        reviewReq: {
          spotInfoId: '' + spotId,
          message: message.current,
          starPoint: '' + rating,
        },
        images: postImg,
      });
      // setIsCreateReview(false);
    }
  };

  useEffect(() => {
    if (isCheckEmpty) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      const id = window.setTimeout(() => {
        setCheckEmpty(false);
      }, 2000);
      timerRef.current = id;
    }
  }, [isCheckEmpty]);

  function handleMessage(e: ChangeEvent<HTMLTextAreaElement>) {
    message.current = e.currentTarget.value;
  }

  if (isSuccess) setIsCreateReview(false);

  return (
    <div className={styles.modalBack} onClick={() => setIsCreateReview(false)}>
      <div
        className={styles.createReviewContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.createReviewTopBox}>
          <div className={styles.closeBoxs}></div>
          <div className={styles.modalTitle}>리뷰 작성</div>
          <img
            src={closeIcon}
            alt="close-icon"
            className={styles.closeBoxs}
            onClick={() => setIsCreateReview(false)}
          />
        </div>
        <section className={styles.sectionBox}>
          <div className={styles.titleBox}>
            <p className={styles.leftText}>여행장소</p>
            <p className={styles.spotTitle}>{checkSpotName}</p>
          </div>
          <div className={styles.starSection}>
            <p className={styles.leftText}>
              별점<span>*</span>
            </p>
            <StarRating rating={rating} setRating={setRating} />
          </div>
          <div className={styles.reviewSection}>
            <p className={styles.leftText}>
              리뷰작성<span>*</span>
            </p>
            <textarea
              className={styles.inputBox}
              onChange={handleMessage}
              maxLength={500}
              placeholder="리뷰를 작성해주세요 (최대 500자)"
            ></textarea>
          </div>
          <div className={styles.imgSection}>
            <p className={styles.leftText}>사진</p>
            <UploadImage
              setPostImg={setPostImg}
              previewImg={previewImg}
              setPreviewImg={setPreviewImg}
            />
          </div>
          <p className={styles.imgText}>
            이미지 파일(GIF, PNG, JPG)을 기준으로 최대 10MB이하, 최대 3개까지
            등록 가능합니다.
          </p>
          <div className={styles.btnBox}>
            <div
              className={styles.cancelBtn}
              onClick={() => setIsCreateReview(false)}
            >
              취소
            </div>
            <div
              className={styles.confirmBtn}
              onClick={() => handleSubmit(spotId)}
            >
              확인
            </div>
          </div>
        </section>
        <div></div>
      </div>
      <Notify
        isActive={isCheckEmpty}
        message="리뷰 내용을 작성해주세요."
        title={'경고'}
        img={warningImg}
      />
      <Notify
        isActive={isError}
        message="네트워크 상태가 불안정하여 리뷰 작성을 실패하였습니다."
        title={'경고'}
        img={warningImg}
      />
      <MutationLoading isShow={isPending} />
    </div>
  );
}