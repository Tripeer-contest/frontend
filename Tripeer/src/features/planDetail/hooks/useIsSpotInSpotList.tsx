import zustandStore from '../../../store/store';
import { useEffect, useState } from 'react';
import { PlanSearchSpotInterface } from '../../../types/PlaceType';
import { SpotYInterface } from '../../../store/room/RoomSliceState';
import getTokenInfo from '../../../utils/jwtDecode';
import { useShallow } from 'zustand/react/shallow';

export default function useIsSpotInSpotList(spot: PlanSearchSpotInterface) {
  const [spotList, doc] = zustandStore(
    useShallow((state) => [state.room_spotList, state.y_doc]),
  );
  const [isExist, setIsExist] = useState(false);

  const addSpot = () => {
    if (doc) {
      const spots = doc.getArray('spotList');
      const totalYList = doc.getArray('totalYList');
      const userInfo = doc.getArray('userInfo').toJSON();
      const myInfo = getTokenInfo();
      const myDetal = userInfo.find((user) => user.userId === myInfo.userId);
      if (myDetal) {
        const newSpot: SpotYInterface = { ...spot, ...myDetal };
        spots.push([{ ...newSpot }]);
        const totalZero: any = totalYList.get(0);
        totalZero.push([{ ...newSpot }]);
      }
    }
  };
  const removeSpot = () => {
    if (doc) {
      const spots = doc.getArray('spotList');
      const idx = spotList.findIndex((info) => {
        return info.spotInfoId === spot.spotInfoId;
      });
      if (idx !== -1) spots.delete(idx, 1);
    }
  };
  useEffect(() => {
    if (spot) {
      spotList.find((existSpot) => existSpot.spotInfoId === spot.spotInfoId)
        ? setIsExist(true)
        : setIsExist(false);
    }
  }, [spot, spotList]);

  return { isExist, addSpot, removeSpot };
}
