import styles from '../../assets/search.module.css';
import SearchBar from '../../../../components/search/SearchBar';
import CreatePlanLayout from '../CreatePlanLayout';
import SearchResult from './SearchResult';
import SaveSpot from './SaveSpot';
import zustandStore from '../../../../store/store';
import AirplaneSlider from './AirplaneSlider';

import { ChangeEvent, useState } from 'react';

export default function PlanSearch({ close }: { close: () => void }) {
  const { spots } = zustandStore();
  const [searchText, setSearchText] = useState('');
  const [showResultUI, setShowResultUI] = useState(false);

  const pageInfo = {
    title: '여행지를 선택해주세요.',
    mobileTitle: '지역 검색',
    backHandler: close,
    canNext: spots.length > 0,
  };

  const UIOn = () => {
    if (searchText.length) setShowResultUI(true);
  };

  const UIOff = () => {
    setShowResultUI(false);
  };

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    UIOn();
    const text = e.target.value;
    if (typeof text === 'string') setSearchText(text);
  };
  return (
    <div onClick={UIOff}>
      <CreatePlanLayout pageInfo={pageInfo}>
        <div className={styles.searchContainer}>
          <SearchBar
            text={searchText}
            textHandler={searchHandler}
            className={styles.searchBar}
            placeholder="지역을 입력해주세요"
            onClick={(e) => {
              e.stopPropagation();
            }}
            onFocus={UIOn}
          />
          {showResultUI && <SearchResult searchText={searchText} />}
          <SaveSpot />
        </div>
        <AirplaneSlider />
      </CreatePlanLayout>
    </div>
  );
}
