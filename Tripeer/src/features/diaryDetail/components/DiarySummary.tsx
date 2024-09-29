import { useParams } from 'react-router-dom';
import useGetSummaryQuery from '../hooks/useGetDiary';
import { makeDayToDotFullString } from '../../../utils/utilDate';
import styles from './diarySummary.module.css';
import mapIcon from '../assets/mapIcon.svg';
import dateIcon from '../assets/dateIcon.svg';
import userIcon from '../assets/userIcon.svg';
import { handleErrorImg } from '../../../data/defaultImg';

export default function DiarySummary() {
  const params = useParams();
  const data = useGetSummaryQuery(params.id);
  return (
    <main className={styles.mainBox}>
      <div className={styles.imgSection}>
        <img
          src={data.img}
          className={styles.diaryImg}
          alt="diary-img"
          onError={handleErrorImg}
        />
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
              {makeDayToDotFullString(data.startDay)} ~{' '}
              {makeDayToDotFullString(data.endDay)}
            </p>
          </div>
        </div>
        <div className={styles.textBox}>
          <img src={userIcon} className={styles.icon} alt="map-icon" />
          <div>
            <p className={styles.subTitle}>여행 인원</p>
            <div className={styles.memberBox}>
              {data.member.map((mem: any, idx: number) => {
                return (
                  <div key={idx} className={styles.memberInfo}>
                    <img
                      className={styles.memberImg}
                      src={mem.profileImage}
                      alt="user-img"
                      onError={handleErrorImg}
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
