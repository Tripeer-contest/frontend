import api from '../../../utils/api.ts';

const postOpt = async (planId: string, option: string, day: number) => {
  const body = { planId, option, day };
  await api.post('https://tripeer.co.kr/node/opt', body);
};
export default postOpt;
