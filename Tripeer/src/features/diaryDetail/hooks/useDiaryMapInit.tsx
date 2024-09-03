import { useEffect } from 'react';
import styles from '../components/diaryMap.module.css';
import { DayListCard } from '../../diary/types/DiaryTypes';
import { getCategoryStyle } from '../../../data/categoryStyle';

export default function useDiaryMapInit(card: DayListCard, map: any) {
  useEffect(() => {
    function setBounds(bounds: any) {
      map && map.setBounds(bounds);
    }
    if (card && map) {
      const bounds = new window.kakao.maps.LatLngBounds();

      const linePath: any[] = [];
      card.planDetailList.map((item, idx) => {
        const markerPosition = new window.kakao.maps.LatLng(
          item.latitude,
          item.longitude,
        );
        linePath.push(markerPosition);
        const content = `<div class="${styles.mapMarker}" style="background-color:${getCategoryStyle(item.contentType).color}" >${idx + 1}</div>`;
        const customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
        });
        customOverlay.setMap(map);
        bounds.extend(markerPosition);
      });

      setBounds(bounds);

      const polyLine = new window.kakao.maps.Polyline({
        path: linePath,
        strokeWeight: 4.5,
        strokeColor: '#04ACB5',
        strokeOpacity: 0.5,
        strokeStyle: 'solid',
      });
      polyLine.setMap(map);
    }
  }, [card, map]);
}
