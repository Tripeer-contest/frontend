import api from '../../../utils/api.ts';
import { totalYListInfo } from '../../../store/room/RoomSliceState.ts';

const postAtoB = async (
  start: totalYListInfo,
  end: totalYListInfo,
  option: string,
) => {
  const body = {
    placeList: [start, end],
    option,
  };

  const res = await api.post('/plan/optimizing/short', body);
  const spotTime = res.data.data.spotTime[0];
  const publicRootList =
    res.data.data.publicRootList !== null
      ? res.data.data.publicRootList[0]
      : null;

  return { spotTime, publicRootList };
};

export default postAtoB;
