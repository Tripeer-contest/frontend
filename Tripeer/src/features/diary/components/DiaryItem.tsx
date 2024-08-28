import { useNavigate } from 'react-router-dom';
import EmptyBox from '../../../components/empty/EmptyBox';
import { EmptyInterface } from '../../../types/EmptyTypes';
import { useGetDiaryList } from '../hook/useGetDiaryList';
import DiaryCards from './DiaryCards';
import TripeerRecommends from '../../../components/empty/TripeerRecommends';
import mapIcon from '../assets/mapIcon.svg';
import styles from './diaryCards.module.css';

export default function DiaryItem() {
  const data = useGetDiaryList();
  const navigate = useNavigate();
  const emptyBoxProps: EmptyInterface = {
    mainText: '현재 저장된 여행기록이 없습니다.',
    subText: '소중한 여행 일정을 계획하고, 저장해보세요.',
    btnText: '여행 일정 짜기',
    clickHandler: () => {
      navigate('/plan');
    },
  };
  return (
    <>
      {data.length > 0 ? (
        <>
          <div className={styles.titleBox}>
            <img className={styles.titleIcon} src={mapIcon} alt="map-icon" />
            <h1 className={styles.titleText}>나의 지나온 여행</h1>
          </div>
          <DiaryCards diaryListData={data} />
        </>
      ) : (
        <>
          <EmptyBox {...emptyBoxProps} />
        </>
      )}
      <TripeerRecommends />
    </>
  );
}
