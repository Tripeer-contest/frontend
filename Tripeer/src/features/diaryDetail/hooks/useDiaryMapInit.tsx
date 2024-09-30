import { useEffect } from 'react';
import styles from '../components/diaryMap.module.css';
import { DayListCard } from '../../diary/types/DiaryTypes';
import { getCategoryStyle } from '../../../data/categoryStyle';

export default function useDiaryMapInit(
  card: DayListCard,
  map: naver.maps.Map | undefined,
) {
  useEffect(() => {
    if (card && map) {
      const linePath: naver.maps.LatLng[] = [];
      card.planDetailList.map((item) => {
        const markerPosition = new naver.maps.LatLng(
          item.latitude,
          item.longitude,
        );
        linePath.push(markerPosition);
      });
      map.fitBounds(linePath);
      new naver.maps.Polyline({
        map: map,
        path: linePath,
        strokeWeight: 4.5,
        strokeColor: '#04ACB5',
        strokeOpacity: 0.5,
        strokeStyle: 'solid',
      });
      card.planDetailList.forEach(
        (item, idx) =>
          new naver.maps.Marker({
            map,
            position: new naver.maps.LatLng(item.latitude, item.longitude),
            icon: {
              content: `<div class=${styles.mapMarker} style="background-color: ${getCategoryStyle(item.contentType).color};" >${idx + 1}</div>`,
              size: { width: 25, height: 25 },
              anchor: new naver.maps.Point(12, 12),
            },
          }),
      );
    }
  }, [card, map]);
}
