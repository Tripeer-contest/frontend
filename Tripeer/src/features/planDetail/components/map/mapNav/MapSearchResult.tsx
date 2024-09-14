import { useState } from 'react';
import zustandStore from '../../../../../store/store';
import BottomDragModal from '../../common/BottomDragModal';
import BottomDragListModal from '../../common/BottomDragListModal';
import MobileSearchResult from './MobileSearchResult';

export default function MapSearchResult() {
  const sortType = zustandStore((state) => state.room_sortType);
  const [category, setCategory] = useState(0);
  const isSearchMode = sortType !== '여행지' && sortType !== '즐겨찾기';
  const sortNum: { [param: string]: number } = {
    전체: 1,
    명소: 2,
    숙박: 3,
    맛집: 4,
  };
  return (
    <>
      {sortType &&
        (isSearchMode ? (
          <BottomDragListModal
            Category={['전체 검색', '현 지도 검색']}
            selectedCategry={category}
            slideTo={setCategory}
            maxWidth="100%"
          >
            <MobileSearchResult
              searchMode={category}
              sortNum={sortNum[sortType]}
            />
          </BottomDragListModal>
        ) : (
          <BottomDragModal>
            <p></p>
          </BottomDragModal>
        ))}
    </>
  );
}
