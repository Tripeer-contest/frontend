import { CATEGORY_STYLE } from '../../../data/categoryStyle';
import styles from './detailCard.module.css';

interface PlanDetail {
  planDetailId: number;
  title: string;
  contentType: '맛집' | '숙박' | '명소';
  image: string;
  address: string;
  latitude: number;
  longitude: number;
  day: number;
  step: number;
  cost: number;
}

interface Dummy {
  planDayId: number;
  date: string;
  planDetailList: PlanDetail[];
}
export default function DayListContent() {
  const dummy: Dummy = {
    planDayId: 468,
    date: '2024-05-30',
    planDetailList: [
      {
        planDetailId: 1922,
        title: '카페녹녹',
        contentType: '맛집',
        image:
          'https://tripeer207.s3.ap-northeast-2.amazonaws.com/spot/2783389.png',
        address: '부산광역시 기장군 미동길 7-20',
        latitude: 35.28962938,
        longitude: 129.17147,
        day: 1,
        step: 1,
        cost: 49104,
      },
      {
        planDetailId: 1923,
        title: '광안리해수욕장',
        contentType: '명소',
        image:
          'https://tripeer207.s3.ap-northeast-2.amazonaws.com/spot/126078.png',
        address: '부산광역시 수영구 광안해변로 219',
        latitude: 35.15379084,
        longitude: 129.1184922,
        day: 1,
        step: 2,
        cost: 0,
      },
      {
        planDetailId: 1924,
        title: '영동밀면&돼지국밥',
        contentType: '맛집',
        image:
          'https://tripeer207.s3.ap-northeast-2.amazonaws.com/spot/2869405.png',
        address: '부산광역시 동구 중앙대로209번길 12',
        latitude: 35.1163102386,
        longitude: 129.0393473684,
        day: 1,
        step: 3,
        cost: 0,
      },
      {
        planDetailId: 1925,
        title: '타워힐호텔',
        contentType: '숙박',
        image:
          'https://tripeer207.s3.ap-northeast-2.amazonaws.com/spot/1798940.png',
        address: '부산광역시 중구 백산길 20',
        latitude: 35.1011924,
        longitude: 129.034401,
        day: 1,
        step: 4,
        cost: 0,
      },
      {
        planDetailId: 1926,
        title: '로빈뮤지엄',
        contentType: '맛집',
        image:
          'https://tripeer207.s3.ap-northeast-2.amazonaws.com/spot/2717045.png',
        address: '부산광역시 강서구 신호산단1로140번길 71',
        latitude: 35.08100572,
        longitude: 128.8808177,
        day: 1,
        step: 5,
        cost: 0,
      },
    ],
  };
  return (
    <div className={styles.dayListContainer}>
      {dummy.planDetailList.map((item: PlanDetail, idx: number) => {
        return (
          <main key={idx} className={styles.dayListBox}>
            <section className={styles.leftSection}>
              <div className={styles.orderBox}>
                <div className={styles.orderCircle}>{idx + 1}</div>
                <div className={styles.orderLine}></div>
                {idx === dummy.planDetailList.length - 1 ? (
                  <div className={styles.closeCircle}></div>
                ) : (
                  <></>
                )}
              </div>
              <div className={styles.textContent}>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.address}>{item.address}</p>
                <div className={styles.contentTypeBox}>
                  <img
                    src={CATEGORY_STYLE[item.contentType].icon}
                    alt="category-icon"
                    className={styles.contentIcon}
                  />
                  <p
                    className={styles.content}
                    style={{ color: CATEGORY_STYLE[item.contentType].color }}
                  >
                    {item.contentType}
                  </p>
                </div>
              </div>
            </section>
            <section className={styles.imgBox}>
              <img src={item.image} className={styles.img} alt="spot-image" />
            </section>
          </main>
        );
      })}
    </div>
  );
}
