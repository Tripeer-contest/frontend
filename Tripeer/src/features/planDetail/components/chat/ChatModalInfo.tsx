import closeIcon from '../../../../assets/button/cancel_gray.svg';
import information from '../../../../assets/button/information.svg';
import usePlanDetailModal from '../../hooks/usePlanDetailModal';
import styles from '../../assets/chat/modal.module.css';
import ListController from '../../../../components/controller/ListController';
import { UIEvent, useState } from 'react';
import MobileMemberInfo from './MobileMemberInfo';
import MobileTripInfo from './MobileTripInfo';

export default function ChatModalInfo() {
  const { open, PlanModal, close } = usePlanDetailModal();
  const [selectIdx, setSelectIdx] = useState(0);

  return (
    <>
      <img
        src={information}
        alt="information-btn"
        className={styles.information}
        onClick={open}
      />
      <PlanModal>
        <div className={styles.closeBox}>
          <img
            src={closeIcon}
            alt="close-icon"
            className={styles.closeIcon}
            onClick={close}
          />
        </div>
        <header>
          <ListController
            Category={['여행 정보', '멤버 목록']}
            selectedCategry={selectIdx}
            slideTo={(idx) => {
              setSelectIdx(idx);
            }}
            maxWidth={'100%'}
          />
        </header>
        <div className={styles.container}>
          {selectIdx === 0 ? <MobileTripInfo /> : <MobileMemberInfo />}
        </div>
      </PlanModal>
    </>
  );
}
