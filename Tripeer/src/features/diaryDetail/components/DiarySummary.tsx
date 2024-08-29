import { useParams } from 'react-router-dom';
import useGetSummaryQuery from '../hooks/useGetDiary';
import { makeDayToFullYearString } from '../../../utils/utilDate';
import styles from './diarySummary.module.css';
import mapIcon from '../assets/mapIcon.svg';
import dateIcon from '../assets/dateIcon.svg';
import userIcon from '../assets/userIcon.svg';

export default function DiarySummary() {
  const params = useParams();
  const data = useGetSummaryQuery(params.id);
  const tempMem = [
    {
      userId: 4,
      nickname: '짱구',
      profileImage:
        'https://tripeer207.s3.ap-northeast-2.amazonaws.com/ProfileImage/4/2336488e-6f29-40a7-b292-c93a722e074e.png',
    },
    {
      userId: 12,
      nickname: '훈이',
      profileImage:
        'https://tripeer207.s3.ap-northeast-2.amazonaws.com/ProfileImage/12/b3dcecd7-712d-4080-9633-b25a62b4e6e5.png',
    },
    {
      userId: 7,
      nickname: '유리',
      profileImage:
        'https://tripeer207.s3.ap-northeast-2.amazonaws.com/ProfileImage/7/86b29e50-8ba9-4a6b-b52a-47b8b2658b15.png',
    },
  ];
  return (
    <main className={styles.mainBox}>
      <div className={styles.imgSection}>
        <img src={data.img} className={styles.diaryImg} alt="diary-img" />
      </div>
      <div className={styles.textSection}>
        <h1 className={styles.title}>{data.title}</h1>
        <div className={styles.textBox}>
          <img src={mapIcon} className={styles.icon} alt="map-icon" />
          <div>
            <p className={styles.subTitle}>여행지</p>
            {data.townList.map((town: string, idx: number) => {
              return (
                <p key={idx} className={styles.contentText}>
                  {idx === data.townList.length - 1 ? (
                    <span>{town}</span>
                  ) : (
                    <span>{town},</span>
                  )}
                </p>
              );
            })}
          </div>
        </div>
        <div className={styles.textBox}>
          <img src={dateIcon} className={styles.icon} alt="map-icon" />
          <div>
            <p className={styles.subTitle}>여행 날짜</p>
            <p className={styles.contentText}>
              {makeDayToFullYearString(data.startDay)} ~{' '}
              {makeDayToFullYearString(data.endDay)}
            </p>
          </div>
        </div>
        <div className={styles.textBox}>
          <img src={userIcon} className={styles.icon} alt="map-icon" />
          <div>
            <p className={styles.subTitle}>여행 인원</p>
            <div className={styles.memberBox}>
              {tempMem.map((mem: any, idx: number) => {
                return (
                  <div key={idx} className={styles.memberInfo}>
                    <img
                      className={styles.memberImg}
                      src={mem.profileImage}
                      alt="user-img"
                    />
                    <p className={styles.memberNick}>{mem.nickname}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
