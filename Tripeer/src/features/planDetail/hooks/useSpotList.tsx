import { useShallow } from 'zustand/react/shallow';
import zustandStore from '../../../store/store';
import { useEffect } from 'react';

export default function useSpotList() {
  const [doc, setSpotList, makeGroupMarker, removeGroupMarker, setSpot] =
    zustandStore(
      useShallow((state) => [
        state.y_doc,
        state.room_setSpotList,
        state.room_makeMarkerByGroup,
        state.room_removeMarkerByGroup,
        state.room_setSpotInfo,
      ]),
    );

  useEffect(() => {
    if (doc) {
      const spotY = doc.getArray('spotList');
      const initSpot = spotY.toJSON();
      setSpotList(initSpot);
      const clickableInitSpot = initSpot.map((spot) => ({
        ...spot,
        clickEvent: () => {
          setSpot &&
            setSpot({
              latitude: spot.latitude,
              longitude: spot.longitude,
              spotInfoId: spot.spotInfoId,
            });
        },
      }));
      makeGroupMarker && makeGroupMarker(1, clickableInitSpot);
      spotY.observeDeep(() => {
        const newArr = spotY.toJSON();
        setSpotList(newArr);
        const clickableInitSpot = newArr.map((spot) => ({
          ...spot,
          clickEvent: () => {
            setSpot &&
              setSpot({
                latitude: spot.latitude,
                longitude: spot.longitude,
                spotInfoId: spot.spotInfoId,
              });
          },
        }));
        removeGroupMarker && removeGroupMarker(1);
        makeGroupMarker && makeGroupMarker(1, clickableInitSpot);
      });
    }
  }, [doc, setSpotList, makeGroupMarker, removeGroupMarker, setSpot]);
}
