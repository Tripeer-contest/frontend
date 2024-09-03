import useMap from '../../../hooks/useMap';
import styles from './diaryMap.module.css';
import { DayListCard } from '../../diary/types/DiaryTypes';
import { useMemo } from 'react';
import { LimitLevel } from '../../../types/kakaoTypes';
import useDiaryMapInit from '../hooks/useDiaryMapInit';

export default function DiaryMap({ card }: { card: DayListCard }) {
  const mapOptions = useMemo(() => {
    return {
      center: {
        latitude: card.planDetailList[0].latitude,
        longitude: card.planDetailList[0].longitude,
      },
      level: 2 as LimitLevel,
    };
  }, [card]);
  const { map, setMapRef } = useMap(mapOptions);
  useDiaryMapInit(card, map);

  return (
    <div className={styles.mapContainer}>
      <div className={styles.mapBox} ref={setMapRef}></div>
    </div>
  );
}
