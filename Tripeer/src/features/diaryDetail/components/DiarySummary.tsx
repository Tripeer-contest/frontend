import { useParams } from 'react-router-dom';
import useGetSummaryQuery from '../hooks/useGetDiary';
import { makeDayToFullYearString } from '../../../utils/utilDate';
import styles from './diarySummary.module.css';
import mapIcon from '../assets/mapIcon.svg';
import dateIcon from '../assets/dateIcon.svg';
import userIcon from '../assets/userIcon.svg';
import user1 from '../assets/sampleUserImg1.png';
import user2 from '../assets/sampleUserImg2.png';
import user3 from '../assets/sampleUserImg3.png';

export default function DiarySummary() {
  const params = useParams();
  const data = useGetSummaryQuery(params.id);
  const tempMem = [
    { nickname: '부수환', profileImage: user1 },
    { nickname: '이해건', profileImage: user2 },
    { nickname: '초코초코비', profileImage: user3 },
    { nickname: '부수환', profileImage: user1 },
    { nickname: '이해건', profileImage: user2 },
    { nickname: '초코초코비', profileImage: user3 },
    { nickname: '부수환', profileImage: user1 },
  ];
  console.log(data);
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
