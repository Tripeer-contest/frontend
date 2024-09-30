import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../../store/store';
import styles from '../../../assets/map/weather.module.css';
import useWeatherQuery, {
  changeFormatWeather,
} from '../../../hooks/useWeatherQuery';

export default function WeatherBox() {
  const [townList, townIdx] = zustandStore(
    useShallow((state) => [state.room_townList, state.room_selectedTownIdx]),
  );
  const cityId = townList[townIdx].cityId;
  const { data, isError, isLoading } = useWeatherQuery(cityId);
  return (
    <>
      {cityId === -1 ? undefined : (
        <div className={styles.weatherBox}>
          {!isError && !isLoading && (
            <>
              <img
                src={changeFormatWeather(data?.precip_type, data?.sky_cond)}
                alt="트리피어-weather-icon"
                className={styles.icon}
              />
              <span> {data?.hourly_temp + ' °C'}</span>
            </>
          )}
          {!isError && isLoading && !data && (
            <div className={styles.ballBox}>
              <div className={styles.ball} />
              <div className={styles.ball} />
              <div className={styles.ball} />
            </div>
          )}
          {isError && <span>-</span>}
        </div>
      )}
    </>
  );
}
