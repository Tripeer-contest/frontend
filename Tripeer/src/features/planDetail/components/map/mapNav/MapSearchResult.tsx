import zustandStore from '../../../../../store/store';
import BottomDragModal from '../../common/BottomDragModal';

export default function MapSearchResult() {
  const keyword = zustandStore((state) => state.room_mapSearchKeyword);
  return (
    <>
      {keyword && (
        <BottomDragModal>
          <p></p>
        </BottomDragModal>
      )}
    </>
  );
}
