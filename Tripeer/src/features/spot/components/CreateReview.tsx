import ContentLayout from '../../../layout/ContentLayout';
import useParamsId from '../hooks/useParamsId';
import styles from '../assets/createReview.module.css';
import backIcon from '../../../assets/button/back.svg';
import useSpotDetailQuery from '../hooks/useSpotDetailQuery';
import { ReviewInterface } from '../../../types/PlaceType';
import { useNavigate } from 'react-router-dom';
import BoxLayout from '../../../layout/BoxLayout';
import StarRating from './StarRating';
import UploadImage from './UploadImage';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import Notify from '../../planDetail/components/notify/Notify';
import warningImg from '../../../assets/error/warn.svg';
import { postReview } from '../api/getSpotDetail';

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
  const message = useRef('');
  const [isCheckEmpty, setCheckEmpty] = useState(false);
  const [postImg, setPostImg] = useState<File[]>([]);
  const [previewImg, setPreviewImg] = useState<string[]>([]);
  const [rating, setRating] = useState(5);
  const [isError, setIsError] = useState(false);
  const timerRef = useRef<null | number>(null);
  const errorRef = useRef<null | number>(null);

  function validateMessage() {
    if (message.current.trim() === '') {
      setCheckEmpty(true);
    }

    return true;
  }

  function handleMessage(e: ChangeEvent<HTMLTextAreaElement>) {
    message.current = e.currentTarget.value;
  }

  async function handleSubmit() {
    if (validateMessage()) {
      try {
        await postReview(
          {
            spotInfoId: spotId.toString(),
            starPoint: rating.toString(),
            message: message.current,
          },
          postImg,
        );
        navigate(`/home/spot/${spotId}`);
      } catch {
        setIsError(true);
      }
    }
  }

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

  useEffect(() => {
    if (isError) {
      if (errorRef.current) {
        clearTimeout(errorRef.current);
        errorRef.current = null;
      }

      const id = window.setTimeout(() => {
        setIsError(false);
      }, 2000);
      errorRef.current = id;
    }
  }, [isError]);

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
                <div className={styles.confirmBtn} onClick={handleSubmit}>
                  작성 완료
                </div>
              </div>
            </section>
          </main>
        </ContentLayout>
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
    </BoxLayout>
  );
}
