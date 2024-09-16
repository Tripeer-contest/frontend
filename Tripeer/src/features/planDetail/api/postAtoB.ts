import api from '../../../utils/api.ts';

const postAtoB = async (startId: number, endId: number, option: string) => {
  const body = {
    placeList: [startId, endId],
    option,
  };

  const res = await api.post('/plan/optimizing/short', body);
  console.log(res);
  return res.data;
};

export default postAtoB;
