import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Map({ setMap }: { setMap: (map: any) => void }) {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      console.log(window);
      const container = mapRef.current;
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);
      setMap(map);
    }
  }, [mapRef, setMap]);
  return (
    <div
      id="map"
      ref={mapRef}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '10px 10px 0px 0px',
      }}
    ></div>
  );
}
