import { useMemo } from 'react';
import styles from '../../../assets/map/map.module.css';
import PlaceList from './PlaceList';
import PlaceMap from './PlaceMap';
import SearchPlace from './SearchPlace';

export default function MobileMap({ page }: { page: number }) {
  const Component = useMemo(() => {
    return [
      <SearchPlace key={'search'} />,
      <PlaceMap key={'map'} />,
      <PlaceList key={'list'} />,
    ];
  }, []);
  return <div className={styles.mobile}>{Component[page]}</div>;
}
