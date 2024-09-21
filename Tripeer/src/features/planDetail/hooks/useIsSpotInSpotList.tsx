import zustandStore from '../../../store/store';
import { useEffect, useState } from 'react';
import { PlanSearchSpotInterface } from '../../../types/PlaceType';
import {
  SpotYInterface,
  totalYListInfo,
} from '../../../store/room/RoomSliceState';
import getTokenInfo from '../../../utils/jwtDecode';
import { useShallow } from 'zustand/react/shallow';

export default function useIsSpotInSpotList(spot: PlanSearchSpotInterface) {
  const [spotList, doc] = zustandStore(
    useShallow((state) => [state.room_spotList, state.y_doc]),
  );
  const [message, setMessage] = useState('');
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
      const totalYList = doc.getArray('totalYList');
      const totalZero: any = totalYList.get(0);

      const idx = spotList.findIndex((info) => {
        return info.spotInfoId === spot.spotInfoId;
      });
      let isRemoved = false;
      totalZero.toArray().forEach((info: totalYListInfo, i: number) => {
        if (info.spotInfoId === spot.spotInfoId) {
          if (idx !== -1) {
            isRemoved = true;
            spots.delete(idx, 1);
            totalZero.delete(i, 1);
          }
        }
      });
      isRemoved
        ? setMessage('')
        : setMessage(
            '여행지가 이미 계획에 포함되어있습니다. 계획에서 삭제 후 시도해주세요.',
          );
    }
  };
  useEffect(() => {
    if (spot) {
      spotList.find((existSpot) => existSpot.spotInfoId === spot.spotInfoId)
        ? setIsExist(true)
        : setIsExist(false);
    }
  }, [spot, spotList]);

  useEffect(() => {
    if (message.length > 0)
      setTimeout(() => {
        setMessage('');
      }, 3000);
  }, [message]);

  return { isExist, addSpot, removeSpot, message };
}
