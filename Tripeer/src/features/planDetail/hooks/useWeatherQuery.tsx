import { useQuery } from '@tanstack/react-query';
import getWeather from '../api/getWeather';
import Rainy from '../../../assets/weather/Rainy.svg';
import Sunny from '../../../assets/weather/Sunny.svg';
import Snowy from '../../../assets/weather/Snowy.svg';
import Cloudy from '../../../assets/weather/Cloudy.svg';
import RainSnow from '../../../assets/weather/RainSnow.svg';
import HeavyRainy from '../../../assets/weather/HeavyRainy.svg';
import ManyCloudy from '../../../assets/weather/ManyCloudy.svg';

interface Weather {
  precip_prob: string;
  precip_type: string;
  sky_cond: string;
  hourly_temp: string;
  min_temp: string;
  max_temp: string;
  time: string;
  cityName: string;
  townName: string;
}

export default function useWeatherQuery(cityId: number) {
  const { data, isError, isLoading } = useQuery<Weather>({
    queryKey: ['weather', cityId],
    queryFn: () => getWeather(cityId),
    enabled: cityId !== -1,
  });
  return { data, isError, isLoading };
}

const WEATHERIMG: { [param: string]: string } = {
  맑음: Sunny,
  구름많음: Cloudy,
  흐림: ManyCloudy,
  비: HeavyRainy,
  '비/눈': RainSnow,
  눈: Snowy,
  소나기: Rainy,
};

export function changeFormatWeather(
  precip_type: string | undefined,
  sky_cond: string | undefined,
) {
  if (!precip_type || !sky_cond) return Sunny;
  return precip_type === '없음'
    ? WEATHERIMG[sky_cond]
    : WEATHERIMG[precip_type];
}
