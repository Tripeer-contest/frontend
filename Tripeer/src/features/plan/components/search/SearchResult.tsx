import styles from '../../assets/search.module.css';
import TownData from '../../../../data/cityTown.json';
import zustandStore from '../../../../store/store';
import { TownInterface } from '../../../../types/PlanTypes';

const highlightText = (text: string, search: string) => {
  const words = text.split(new RegExp(`(${search})`, 'gi'));
  return words.map((word, idx) =>
    word === search ? (
      <span key={idx} style={{ color: '#04ACB5' }}>
        {word}
      </span>
    ) : (
      <span key={idx}>{word}</span>
    ),
  );
};

const findSearchTown = (search: string) => {
  return TownData.filter((town) => town.name.includes(search));
};

export default function SearchResult({ searchText }: { searchText: string }) {
  const { addSpot, spots } = zustandStore();
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
              {highlightText(town.name, searchText)}
            </p>
          ))}
        </div>
      ) : null}
    </>
  );
}
