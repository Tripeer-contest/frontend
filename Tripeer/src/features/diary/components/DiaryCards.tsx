import styles from './diaryCards.module.css';
import deleteBtn from '../../../assets/button/cancel_gray.svg';
import deleteWhiteBtn from '../../../assets/button/cancel_white.svg';
import useDeleteModal from '../hook/useDeleteModal';
import { DiaryItem } from '../../../types/DiaryTypes';
import useDeleteDiary from '../hook/useDeleteDiary';
import { useState } from 'react';
import MutationLoading from '../../../components/loading/MutationLoading';
import { useNavigate } from 'react-router-dom';
import { makeDayToDotFullString } from '../../../utils/utilDate';
import { handleErrorImg } from '../../../data/defaultImg';

export default function DiaryCards({
  diaryListData,
}: {
  diaryListData: DiaryItem[];
}) {
  const [planId, setPlanId] = useState(0);
  const { open, DeleteModal } = useDeleteModal();
  const { mutate, isPending } = useDeleteDiary();
  const navigate = useNavigate();
  const openHandler = (id: number) => {
    setPlanId(id);
    open();
  };

  const goDiaryDetail = (planId: number) => {
    navigate(`/diary/detail/${planId}`);
  };

  return (
    <main className={styles.cardsBox}>
      {diaryListData.map((item, idx) => {
        return (
          <div className={styles.diaryCard} key={idx}>
            <img
              className={styles.topDeleteBtn}
              src={deleteWhiteBtn}
              alt="deleteBtn"
              onClick={() => openHandler(item.planId)}
            />
            <img
              className={styles.cardImg}
              src={item.img}
              alt="diary-image"
              onError={handleErrorImg}
            />
            <div className={styles.cardTextBox}>
              <div className={styles.topBox}>
                <p className={styles.title}>{item.title}</p>
                <img
                  className={styles.deleteBtn}
                  src={deleteBtn}
                  alt="deleteBtn"
                  onClick={() => openHandler(item.planId)}
                />
              </div>

              <div className={styles.bottomBox}>
                <p>
                  {makeDayToDotFullString(item.startDay)} ~
                  {makeDayToDotFullString(item.endDay)}
                  <span>, {item.member.length}명</span>
                </p>
              </div>
              <div className={styles.bottomSubtitleBox}>
                {item.townList.map((town, idx) => {
                  return (
                    <p key={idx}>
                      {idx === item.townList.length - 1 ? (
                        <span>{town}</span>
                      ) : (
                        <span>{town},</span>
                      )}
                    </p>
                  );
                })}
              </div>
              <div
                className={styles.detailBtn}
                onClick={() => {
                  goDiaryDetail(item.planId);
                }}
              >
                <p className={styles.detailText}>상세보기</p>
              </div>
            </div>
          </div>
        );
      })}
      <DeleteModal
        confirm={() => {
          mutate(planId);
        }}
      />
      <MutationLoading isShow={isPending} />
    </main>
  );
}
