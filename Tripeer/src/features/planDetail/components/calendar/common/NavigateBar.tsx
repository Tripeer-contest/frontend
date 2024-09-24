import styles from '../../../assets/calendar/common/nav.module.css';
import airplane from '../../../../../assets/trip/airplane.svg';
import car from '../../../../../assets/trip/car.svg';
import bus from '../../../../../assets/trip/bus.svg';
import ferry from '../../../../../assets/trip/ferry.svg';
import ROUTE_STYLE from '../../../../../data/trans';
import toggle from '../../../../../assets/button/direct_gray.svg';
import { Fragment, useState } from 'react';
import NavigateTrail from './NavigateTrail';

export default function NavigateBar({ timeObject }: { timeObject: any }) {
  const [rootVisible, setRootVisible] = useState(false);
  console.log(timeObject);
  const option = timeObject.option;
  const rootInfo = timeObject.rootList[option];
  const time = timeObject.time[option];
  const vehicle = [car, bus, ferry, airplane][option];
  const vehicleKey = ['CAR', 'BUS', 'FERRY', 'AIRPLANE'][option];
  const vehicleStyle = ROUTE_STYLE[vehicleKey];
  console.log(rootInfo);
  const getWidth = (totalMinutes: number, minutes: number) => {
    return (100 * minutes) / totalMinutes;
  };
  const getTime = (number: number) => {
    return number * 60;
  };
  const getKmOrM = (number: number) => {
    return number > 1000 ? `${(number / 1000).toFixed(1)}km` : `${number}m`;
  };
  return (
    <div className={styles.naviContainer}>
      <div className={styles.vehicleInfo}>
        <img src={vehicle} alt="vehicle-img" className={styles.vehicleIcon} />
        <p className={styles.vehicleTime}>
          {time.includes('분') || time.includes('시') ? time : '-'}
        </p>
        <p className={styles.vehicleFare}>
          {rootInfo ? rootInfo.totalFare : '-'} 원
        </p>
      </div>
      {rootInfo ? (
        <>
          <div className={styles.barContainer}>
            {rootInfo.publicRootDetailList.map((root: any, idx: number) => (
              <div
                key={idx}
                className={styles.rootBar}
                style={{
                  backgroundColor: `${ROUTE_STYLE[root.mode].routeColor}`,
                  width: `calc(${getWidth(rootInfo.totalTime, getTime(root.sectionTime))}%)`,
                }}
              >
                <div
                  className={styles.transIconCircle}
                  style={{
                    backgroundColor: `${ROUTE_STYLE[root.mode].circleColor}`,
                  }}
                >
                  <img src={ROUTE_STYLE[root.mode].Icon} alt="small-icon" />
                </div>
                <p className={styles.rootTime}>{root.sectionTime}분</p>
              </div>
            ))}
          </div>
          <>
            {rootVisible && (
              <div className={styles.rootDetailContainer}>
                <NavigateTrail />
                {rootInfo.publicRootDetailList.map((root: any, idx: number) => (
                  <Fragment key={idx}>
                    <div className={styles.detailItem}>
                      <div className={styles.detailInfo}>
                        <img
                          src={ROUTE_STYLE[root.mode].smallIcon}
                          alt="small-icon"
                        />
                        <p className={styles.rootDetailBox}>
                          {ROUTE_STYLE[root.mode].info}로{' '}
                          {getKmOrM(root.distance)} 이동
                          <p className={styles.rootDetailInfo}>
                            {root.startName} ~ {root.endName}
                          </p>
                        </p>
                      </div>
                      <p>({root.sectionTime}분)</p>
                    </div>
                    <NavigateTrail />
                  </Fragment>
                ))}
              </div>
            )}
            <img
              src={toggle}
              alt="toggle-icon"
              className={styles.rootToggle}
              style={{ transform: `rotate(${rootVisible ? -90 : 90}deg)` }}
              onClick={() => setRootVisible((prev) => !prev)}
            />
          </>
        </>
      ) : (
        <div className={styles.barContainer}>
          <div
            className={styles.rootBar}
            style={{
              backgroundColor: `${vehicleStyle.routeColor}`,
              width: '100%',
            }}
          >
            <div
              className={styles.transIconCircle}
              style={{ backgroundColor: vehicleStyle.circleColor }}
            >
              <img src={vehicleStyle.Icon} alt="small-icon" />
            </div>
            <p className={styles.rootTime}>{time}</p>
          </div>
        </div>
      )}
    </div>
  );
}
