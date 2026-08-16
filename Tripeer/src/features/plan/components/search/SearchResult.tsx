import styles from '../../assets/search.module.css';
import zustandStore from '../../../../store/store';
import { TownInterface } from '../../../../types/PlanTypes';
import { findSearchTown } from '../../../../utils/findTown';

import { useShallow } from 'zustand/react/shallow';
import HighlightText from '../../hooks/useHighlight';

export default function SearchResult({ searchText }: { searchText: string }) {
  const [addSpot, spots] = zustandStore(
    useShallow((state) => [state.addSpot, state.spots]),
  );
  const resultTowns = findSearchTown(searchText);

  const clickHandler = (town: TownInterface) => {
    const existSpot = spots.filter((spot) => spot.idx === town.idx);
    if (existSpot.length > 0) return;
    addSpot(town);
  };

  return (
    <>
      {resultTowns.length > 0 ? (
        <div className={styles.result}>
          {resultTowns.map((town) => (
            <p
              className={styles.searchText}
              key={town.name}
              onClick={() => clickHandler(town)}
            >
              {<HighlightText text={town.name} search={searchText} />}
            </p>
          ))}
        </div>
      ) : null}
    </>
  );
}
