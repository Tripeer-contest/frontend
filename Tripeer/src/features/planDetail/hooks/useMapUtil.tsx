import { useEffect } from 'react';
import zustandStore from '../../../store/store';
import { useShallow } from 'zustand/react/shallow';

export default function useMapUtil(map: any) {
  const [setBounds, setMoveMap] = zustandStore(
    useShallow((state) => [state.room_setBound, state.room_setMoveMap]),
  );

  useEffect(() => {
    if (map) {
      const getBound = () => {
        const bounds = map.getBounds();
        const swLatlng = bounds.getSouthWest();
        const neLatlng = bounds.getNorthEast();
        const minLat = swLatlng.Ma;
        const minLon = swLatlng.La;
        const maxLat = neLatlng.Ma;
        const maxLon = neLatlng.La;
        setBounds(minLat, minLon, maxLat, maxLon);
      };
      const moveMap = (latitude: number, longitude: number) => {
        const mapLatLng = new window.kakao.maps.LatLng(latitude, longitude);
        map.panTo(mapLatLng);
      };
      setMoveMap(moveMap);
      getBound();
      window.kakao.maps.event.addListener(map, 'bounds_changed', getBound);
    }
  }, [map, setBounds, setMoveMap]);
}
