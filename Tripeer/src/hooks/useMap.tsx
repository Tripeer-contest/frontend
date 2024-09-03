import { useCallback, useState } from 'react';
import { KakaoMapOptions } from '../types/kakaoTypes';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function useMap(mapOptions?: KakaoMapOptions) {
  const [map, setMap] = useState<any>();
  const setMapRef = useCallback(
    (container: HTMLDivElement | null) => {
      if (container) {
        const latitude = mapOptions?.center?.latitude;
        const longitude = mapOptions?.center?.longitude;
        const level = mapOptions?.level;
        const options = {
          center:
            latitude && longitude
              ? new window.kakao.maps.LatLng(latitude, longitude)
              : new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: level ? level : 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        setMap(map);
      }
    },
    [mapOptions],
  );
  return {
    setMapRef,
    map,
  };
}
