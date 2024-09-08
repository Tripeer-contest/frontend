import { useEffect, useState } from 'react';
import zustandStore from '../../../store/store';

export default function useUserMapView() {
  const [south, setSouth] = useState(0);
  const [west, setWest] = useState(0);
  const [north, setNorth] = useState(0);
  const [east, setEast] = useState(0);
  const map = zustandStore((state) => state.room_map);

  useEffect(() => {
    const getBoundPosition = () => {
      const bound = map.getBounds();
      const swPosition = bound.getSouthWest();
      const nePosition = bound.getNorthEast();
      setSouth(swPosition.getLng());
      setWest(swPosition.getLat());
      setEast(nePosition.getLat());
      setNorth(nePosition.getLng());
    };
    if (map) {
      window.kakao.maps.event.addListener(
        map,
        'bounds_changed',
        getBoundPosition,
      );
    }
    return () => {
      if (map)
        window.kakao.maps.event.removeListener(
          map,
          'bounds_changed',
          getBoundPosition,
        );
    };
  }, [map]);

  return {
    south,
    west,
    north,
    east,
  };
}
