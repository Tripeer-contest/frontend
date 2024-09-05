import { useMemo } from 'react';
import styles from '../../../assets/map/map.module.css';
import PlaceList from './PlaceList';
import PlaceMap from './PlaceMap';
import RecommendPlace from './RecommendPlace';

export default function MobileMap({ page }: { page: number }) {
  const Component = useMemo(() => {
    return [
      <RecommendPlace key={'recommend'} />,
      <PlaceMap key={'map'} />,
      <PlaceList key={'list'} />,
    ];
  }, []);
  return <div className={styles.mobile}>{Component[page]}</div>;
}
