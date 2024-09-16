import { useState } from 'react';
import zustandStore from '../../../../../store/store';
import BottomDragModal from '../../common/BottomDragModal';
import BottomDragListModal from '../../common/BottomDragListModal';
import MobileSearchResult from './MobileSearchResult';
import { useShallow } from 'zustand/react/shallow';
import MobileMapTravel from './MobileMapTravel';
import MapMobileModal from './MapMobileModal';

export default function MapSearchResult() {
  const [sortType, keyword, spotInfo] = zustandStore(
    useShallow((state) => [
      state.room_sortType,
      state.room_mapSearchKeyword,
      state.room_spotInfo,
    ]),
  );

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
        !spotInfo &&
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
              keyword=""
            />
          </BottomDragListModal>
        ) : (
          <BottomDragModal>
            {sortType === '여행지' && <MobileMapTravel />}
          </BottomDragModal>
        ))}
      {keyword && !spotInfo && (
        <BottomDragListModal
          Category={['전체 검색', '현 지도 검색']}
          selectedCategry={category}
          slideTo={setCategory}
          maxWidth="100%"
        >
          <MobileSearchResult
            searchMode={category}
            sortNum={1}
            keyword={keyword}
          />
        </BottomDragListModal>
      )}
      {spotInfo && (
        <BottomDragModal>
          <MapMobileModal />
        </BottomDragModal>
      )}
    </>
  );
}
