import { useEffect } from 'react';
import useModal from '../../../../../hooks/useModal';
import zustandStore from '../../../../../store/store';
import MapMobileModal from './MapMobileModal';
import { useShallow } from 'zustand/react/shallow';

export default function DesktopMapDetail() {
  const [spotInfo, setSpotInfo] = zustandStore(
    useShallow((state) => [state.room_spotInfo, state.room_setSpotInfo]),
  );
  const { ModalLayout, close, open } = useModal();
  useEffect(() => {
    if (spotInfo) open();
    else close();
  }, [spotInfo, open, close]);
  return (
    <>
      {spotInfo && (
        <ModalLayout
          style={{
            outline: 'none',
            scrollbarWidth: 'none',
            border: 'none',
            width: '800px',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              close();
              setSpotInfo(null);
            }
          }}
        >
          <MapMobileModal />
        </ModalLayout>
      )}
    </>
  );
}
