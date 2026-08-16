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
            maxWidth: '1000px',
            maxHeight: "calc(var(--vh,'1vh')*100 - 100px)",
            width: '100%',
            height: '100%',
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
