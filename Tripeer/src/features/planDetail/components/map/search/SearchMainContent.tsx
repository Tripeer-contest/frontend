import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../../../store/store';
import useParamsId from '../../../../spot/hooks/useParamsId';
import styles from '../../../assets/map/mapNav/searchContent.module.css';
import useGetPlanSpotSearchQuery from '../../../hooks/useGetPlanSpotSearch';
import SearchSpotCard from './SearchSpotCard';
import { useState } from 'react';

export default function SearchMainContent() {
  const [keyword] = useState('');
  const id = useParamsId();
  const [townInfo, townIdx] = zustandStore(
    useShallow((state) => [state.room_townList, state.room_selectedTownIdx]),
  );
  const data = useGetPlanSpotSearchQuery(
    id,
    townInfo[townIdx].cityId,
    townInfo[townIdx].townId === 0 ? -1 : townInfo[townIdx].townId - 1,
    keyword,
    1,
  );
  console.log(data);
  return (
    <div className={styles.container}>
      <SearchSpotCard />
    </div>
  );
}
