import { useState } from 'react';
import useMap from '../../../../../hooks/useMap';
import styles from '../../../assets/map/mapNav/placeMap.module.css';
import BottomDragModal from '../../common/BottomDragModal';

import MapHeader from './MapHeader';

export default function PlaceMap() {
  const [modalVisible, setModalVisible] = useState(false);
  const { setMapRef } = useMap();
  // const open = () => setModalVisible(true);
  const close = () => setModalVisible(false);
  return (
    <>
      <div className={styles.container} ref={setMapRef}>
        <MapHeader modalVisible={modalVisible} close={close} />
      </div>
      {modalVisible && (
        <BottomDragModal>
          <p>드래그 모달</p>
        </BottomDragModal>
      )}
    </>
  );
}
