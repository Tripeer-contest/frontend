import api from '../../../utils/api.ts';
import { totalYListInfo } from '../../../store/room/RoomSliceState.ts';

const postAtoB = async (start: totalYListInfo, end: totalYListInfo) => {
  const body = {
    placeList: [start, end],
  };

  const res = await api.post('/plan/optimizing/short', body);
  return res.data.data;
};

export default postAtoB;
