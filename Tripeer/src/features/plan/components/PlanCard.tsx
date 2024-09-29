import styles from '../assets/card.module.css';
import scheduleIcon from '../assets/img/schedule_icon.svg';
import navIcon from '../assets/img/nav_icon.svg';
import personIcon from '../assets/img/person_icon.svg';
import deleteBtn from '../../../assets/button/delete.svg';
import { PlanCardType } from '../types/PlanTypes';
import { makeDayToFullString } from '../../../utils/utilDate';
import useModal from '../../../hooks/useModal';
import useDeletePlan from '../hooks/useDeletePlan';
import { useEffect } from 'react';
import MutationLoading from '../../../components/loading/MutationLoading';
import { useNavigate } from 'react-router-dom';
import { handleErrorImg } from '../../../data/defaultImg';

export default function PlanCard({ data }: { data: PlanCardType }) {
  const navigate = useNavigate();
  const startDay = makeDayToFullString(data.startDay);
  const endDay = makeDayToFullString(data.endDay);
  const Modal = useModal();
  const mutation = useDeletePlan();

  const deletePlan = (idx: number) => {
    mutation.mutate(idx);
  };

  const deleteClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    Modal.open();
  };

  const cardClickHandler = () => {
    navigate(`/plan/detail/${data.planId}`);
  };

  useEffect(() => {
    if (mutation.isSuccess) {
      Modal.close();
    }
  }, [mutation.isSuccess, Modal]);

  return (
    <>
      <div className={styles.card} onClick={cardClickHandler}>
        <img
          src={data.img}
          alt="location-img"
          className={styles.cardImg}
          onError={handleErrorImg}
        />
        <div className={styles.cardInfo}>
          <p className={styles.cardTitle}>{data.title}</p>
          <div className={styles.detailInfo}>
            <img src={navIcon} alt="nav-icon" className={styles.icon} />
            {data.townList.map((town, idx) => (
              <span key={idx}>{town}</span>
            ))}
          </div>
          <div className={styles.layoutInfo}>
            <div className={styles.detailInfo}>
              <img
                src={scheduleIcon}
                alt="schedule-icon"
                className={styles.icon}
              />
              <p>{`${startDay} ~ ${endDay}`}</p>
            </div>
            <div className={styles.detailInfo}>
              <img src={personIcon} alt="person-icon" className={styles.icon} />
              <p>{data.member.length}명</p>
            </div>
          </div>
        </div>
        <img
          src={deleteBtn}
          alt="delete-btn"
          className={styles.deleteBtn}
          onClick={deleteClickHandler}
        />
      </div>
      <Modal.ModalLayout className={styles.modalContainer}>
        <div className={styles.modalBox}>
          <h3 className={styles.modalContent}>해당 플랜을 삭제하시겠습니까</h3>
          <div className={styles.btnBox}>
            <button
              className={styles.btn}
              onClick={() => {
                deletePlan(data.planId);
              }}
            >
              예
            </button>
            <button className={styles.btn} onClick={Modal.close}>
              아니요
            </button>
          </div>
        </div>
      </Modal.ModalLayout>
      <MutationLoading isShow={mutation.isPending} />
    </>
  );
}
