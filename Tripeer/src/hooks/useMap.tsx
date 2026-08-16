import { useCallback, useEffect, useState } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function useMap(mapOptions?: any) {
  const [map, setMap] = useState<naver.maps.Map>();
  const setMapRef = useCallback(
    (container: HTMLDivElement | null) => {
      if (container) {
        const latitude = mapOptions?.center?.latitude;
        const longitude = mapOptions?.center?.longitude;
        const level = mapOptions?.level;
        const options = {
          center:
            latitude && longitude
              ? new naver.maps.LatLng(latitude, longitude)
              : new naver.maps.LatLng(33.450701, 126.570667),
          level: level ? level : 3,
        };
        const map = new naver.maps.Map(container, options);
        map.setOptions('minZoom', level ? level : 11);
        setMap(map);
      }
    },
    [mapOptions],
  );

  useEffect(() => {
    if (map) {
      map.autoResize();
    }
  }, [map]);

  return {
    setMapRef,
    map,
  };
}
