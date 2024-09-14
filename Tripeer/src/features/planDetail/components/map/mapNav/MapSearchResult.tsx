import { useState } from 'react';
import zustandStore from '../../../../../store/store';
import BottomDragModal from '../../common/BottomDragModal';
import BottomDragListModal from '../../common/BottomDragListModal';

export default function MapSearchResult() {
  const keyword = zustandStore((state) => state.room_sortType);
  const [category, setCategory] = useState(0);
  const isSearchMode = keyword !== '여행지' && keyword !== '즐겨찾기';
  return (
    <>
      {keyword &&
        (isSearchMode ? (
          <BottomDragListModal
            Category={['전체 검색', '현 지도 검색']}
            selectedCategry={category}
            slideTo={setCategory}
            maxWidth="100%"
          >
            <p>zz</p>
          </BottomDragListModal>
        ) : (
          <BottomDragModal>
            <p></p>
          </BottomDragModal>
        ))}
    </>
  );
}
